import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import CategorySection from "./CategorySection";

export interface Category {
  id: string;
  name: string;
  createdAt?: number;
}

export interface Item {
  id: string;
  name: string;
  price: number | string;
  ingredients?: string;
  priceTw?: number | string;
  categoryId: string;
  visible?: boolean;
  createdAt?: number;
}

export default function Menu() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [offline, setOffline] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    let c = false;
    let i = false;

    const fetchOfflineData = async () => {
      try {
        const res = await fetch("/menu-data.json");
        if (!res.ok) throw new Error("Failed to load offline JSON");
        const data = await res.json();

        // تحويل الكائن لمصفوفة
        const catsArray = data.categories
          ? Object.entries(data.categories).map(([id, v]: any) => ({
              id,
              name: v.name,
              createdAt: v.createdAt || 0,
            }))
          : [];
        const itemsArray = data.items
          ? Object.entries(data.items).map(([id, v]: any) => ({
              id,
              ...v,
              createdAt: v.createdAt || 0,
            }))
          : [];

        setCategories(catsArray);
        setItems(itemsArray);
        setToast("أنت أوفلاين: يتم عرض البيانات من نسخة محلية");

        // إزالة التوست بعد 3 ثواني
        setTimeout(() => setToast(""), 3000);
      } catch (err) {
        console.error("Failed to load offline data", err);
        setToast("فشل تحميل البيانات المحلية");
        setCategories([]);
        setItems([]);
        setTimeout(() => setToast(""), 3000);
      } finally {
        setLoading(false);
      }
    };

    if (!navigator.onLine) {
      setOffline(true);
      fetchOfflineData();
      return;
    }

    const unsubscribeCategories = onValue(ref(db, "categories"), (snap) => {
      const data = snap.val();
      const catsArray = data
        ? Object.entries(data).map(([id, v]: any) => ({
            id,
            name: v.name,
            createdAt: v.createdAt || 0,
          }))
        : [];
      setCategories(catsArray);
      c = true;
      if (i) setLoading(false);
    });

    const unsubscribeItems = onValue(ref(db, "items"), (snap) => {
      const data = snap.val();
      const itemsArray = data
        ? Object.entries(data).map(([id, v]: any) => ({
            id,
            ...v,
            createdAt: v.createdAt || 0,
          }))
        : [];
      setItems(itemsArray);
      i = true;
      if (c) setLoading(false);
    });

    return () => {
      unsubscribeCategories();
      unsubscribeItems();
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-md">
        <div className="flex flex-col items-center gap-6">
          <img
            src="/bistro-logo.png"
            alt="Logo"
            className="w-28 h-auto animate-pulse"
          />
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full border-4 border-red-700" />
            <div className="absolute inset-0 rounded-full border-4 border-[#D3AC69] border-t-transparent animate-spin" />
          </div>
          <p className="text-red-700 text-xl md:text-3xl tracking-widest animate-pulse font-[Cairo] font-bold">
            يتم تحضير القائمة...
          </p>
        </div>
      </div>
    );
  }

  const validCategories = categories.filter((cat) =>
    items.some((i) => i.categoryId === cat.id)
  );

  const dropdownOptions = [{ id: null, name: "جميع الأصناف" }, ...validCategories];

  return (
    <main className="max-w-4xl mx-auto px-4 pb-20 space-y-10 relative">
      {/* ================== Toast ================== */}
      {toast && offline&&(
        <div
          className="fixed top-5 right-5 bg-red-600 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-fade-in-down"
          style={{ animation: "fadeInDown 0.5s ease-out" }}
        >
          {toast}
        </div>
      )}

      {/* ================== Custom Dropdown ================== */}
      <div className="flex justify-center mb-8 relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="min-w-60 max-w-80 flex justify-between items-center px-4 py-2 bg-white border border-gray-300 rounded-xl shadow-md text-gray-800 font-[Cairo] font-medium text-sm md:text-base hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
        >
          {activeCategory
            ? validCategories.find((c) => c.id === activeCategory)?.name
            : "جميع الأصناف"}
          <span
            className="ml-2 transform transition-transform duration-200"
            style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            ▼
          </span>
        </button>

        {dropdownOpen && (
          <ul className="absolute top-full mt-2 min-w-60 max-w-80 w-auto bg-white border border-gray-300 rounded-xl shadow-lg z-50 overflow-auto max-h-60 animate-[fadeIn_0.3s_ease-out]">
            {dropdownOptions.map((opt) => (
              <li
                key={opt.id ?? "all"}
                onClick={() => {
                  setActiveCategory(opt.id);
                  setDropdownOpen(false);
                }}
                className="px-4 py-2 cursor-pointer hover:bg-red-50 hover:text-red-700 transition duration-150 font-[Cairo] text-gray-800 text-sm md:text-base"
              >
                {opt.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ================== Sections ================== */}
      <div className="space-y-8">
        {validCategories.map((cat) => {
          const catItems = items.filter(
            (i) =>
              i.categoryId === cat.id &&
              (activeCategory === null || activeCategory === cat.id)
          );
          if (!catItems.length) return null;

          return (
            <div
              key={cat.id}
              className="transition-opacity duration-500 ease-out opacity-0"
              style={{ opacity: 1 }}
            >
              <CategorySection category={cat} items={catItems} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
