// ItemRow.tsx
import { type Item } from "./Menu";

interface Props {
  item: Item;
  luxury?: boolean;
}

export default function ItemRow({ item, luxury }: Props) {
  const prices = String(item.price).split(",");

  if (luxury) {
    return (
      <div className="flex justify-between items-center py-3 md:py-4 px-4 md:px-6 border-b border-gray-200">
        {/* الاسم والمكونات */}
        <div className="flex-1 min-w-0">
          <span className="block text-base sm:text-xl font-[Zain-ExtraBold] text-[#231F20] truncate">
            {item.name}
          </span>
          {item.ingredients && (
            <span className="block text-xs sm:text-sm text-gray-500 mt-1 truncate font-[Zain-italic]">
              {item.ingredients}
            </span>
          )}
        </div>

        {/* السعر الأساسي وTW - دائمًا على نفس السطر */}
        <div className="shrink-0 text-right font-[Zain-ExtraBold] text-[#ED1B24] text-sm sm:text-lg whitespace-nowrap flex items-center gap-2">
          {prices.map((p, i) => (
            <span key={i}>{p.trim()}₪</span>
          ))}

          {item.priceTw && item.priceTw > 0 && (
            <div className="px-2 py-1 bg-[#FDEDEE] text-[#C71F1F] rounded-xl text-xs sm:text-sm font-[Zain-ExtraBold]">
              TW {item.priceTw}₪
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}
