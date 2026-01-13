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
  price: number;
  ingredients?: string; // ✅ أضف هذا السطر
  priceTw?: number;
  categoryId: string;
  visible?: boolean;
  createdAt?: number;
}

export default function Menu() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let c = false;
    let i = false;

    onValue(ref(db, "categories"), (snap) => {
      const data = snap.val();
      setCategories(
        data
          ? Object.entries(data).map(([id, v]: any) => ({
              id,
              name: v.name,
              createdAt: v.createdAt || 0,
            }))
          : []
      );
      c = true;
      if (i) setLoading(false);
    });

    onValue(ref(db, "items"), (snap) => {
      const data = snap.val();
      setItems(
        data
          ? Object.entries(data).map(([id, v]: any) => ({
              id,
              ...v,
              createdAt: v.createdAt || 0,
            }))
          : []
      );
      i = true;
      if (c) setLoading(false);
    });
  }, []);

  /* ================== Loader ================== */

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
            <div className="absolute inset-0 rounded-full border-4 border-black" />
            <div className="absolute inset-0 rounded-full border-4 border-red-700 border-t-transparent animate-spin" />
          </div>

          <p className="text-red-700 text-lg tracking-widest animate-pulse font-[ArefRuqaa]">
            يتم تحضير القائمة...
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 pb-20 space-y-14">
      {categories.map((cat) => {
        const catItems = items.filter((i) => i.categoryId === cat.id);
        if (!catItems.length) return null;

        return (
          <CategorySection
            key={cat.id}
            category={cat}
            items={catItems}
          />
        );
      })}
    </main>
  );
}
