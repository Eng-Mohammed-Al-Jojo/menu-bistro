// ItemRow.tsx
import { type Item } from "./Menu";

interface Props {
  item: Item;
  luxury?: boolean;
}

export default function ItemRow({ item, luxury }: Props) {
  const prices = String(item.price).split(",");
  const unavailable = item.visible === false;

  if (luxury) {
    return (
      <div className="flex justify-between items-center py-3 md:py-4 px-4 md:px-6 border-b border-gray-200">
        {/* الاسم والمكونات */}
        <div className="flex-1 min-w-0">
          <span
            className={`block text-md md:text-xl font-[Zain-ExtraBold] truncate
              ${unavailable ? "line-through text-[#231F20]/40" : "text-[#231F20]"}`}
          >
            {item.name}
          </span>

          {/* المكونات تظهر فقط إذا متوفر */}
          {!unavailable && item.ingredients && (
            <span className="block text-sm sm:text-sm mt-1 truncate font-[Zain-italic] text-gray-500">
              {item.ingredients}
            </span>
          )}
        </div>

        {/* السعر أو نص غير متوفر */}
        <div className="shrink-0 text-right flex flex-col items-end gap-1">
          {unavailable ? (
            // نص بديل للسعر
            <span className="text-sm sm:text-base text-[#ED1B24] font-[Zain-italic]">
              غير متوفر حالياً
            </span>
          ) : (
            <div className="flex items-center gap-2 font-[Zain-ExtraBold] text-lg sm:text-lg text-[#D3AC69]">
              {prices.map((p, i) => (
                <span key={i}>{p.trim()}₪</span>
              ))}

              {item.priceTw && item.priceTw > 0 && (
                <div className="px-2 py-1 rounded-xl text-xs sm:text-sm font-[Zain-ExtraBold] bg-[#fdf3e4] text-[#D3AC69]">
                  TW {item.priceTw}₪
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}
