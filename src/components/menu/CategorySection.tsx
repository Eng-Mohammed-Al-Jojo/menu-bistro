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
        <span className="flex-1 h-1 bg-[#D3AC69]/60 rounded-full min-w-5" />

     <h2
        className="
          text-[clamp(1.3rem,6vw,2.4rem)]
          md:text-[clamp(2rem,3vw,3.4rem)]
          font-[Cairo] font-extrabold
          text-[#d33e27]
          uppercase tracking-widest
          text-center
        "
      >
        {category.name}
      </h2>

        <span className="flex-1 h-1 bg-[#D3AC69]/60 rounded-full min-w-5" />
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
