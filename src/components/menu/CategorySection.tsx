// CategorySection.tsx
import ItemRow from "./ItemRow";
import type { Category, Item } from "./Menu";

interface Props {
  category: Category;
  items: Item[];
}

export default function CategorySection({ category, items }: Props) {
  return (
    <section className="mb-16 px-4 md:px-0">
      {/* عنوان القسم */}
      <div className="mb-8 md:mb-10 flex items-center justify-center gap-4">
        <span className="flex-1 h-1 bg-[#ED1B24]/60 rounded-full min-w-5" />

        <h2
          className="text-[clamp(1rem,5vw,2rem)] md:text-[clamp(1.75rem,2.5vw,3rem)] font-[Lemonada] font-bold text-[#231F20] uppercase tracking-widest text-center"
          style={{ lineHeight: 1 }}
        >
          {category.name}
        </h2>

        <span className="flex-1 h-1 bg-[#ED1B24]/60 rounded-full min-w-5" />
      </div>

      {/* قائمة الأصناف */}
      <div className="flex flex-col gap-4 md:gap-5">
        {items.map((item) => (
          <ItemRow key={item.id} item={item} luxury />
        ))}
      </div>
    </section>
  );
}
