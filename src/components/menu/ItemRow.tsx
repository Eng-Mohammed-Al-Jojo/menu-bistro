// ItemRow.tsx
import { type Item } from "./Menu";

interface Props {
  item: Item;
  luxury?: boolean;
}

export default function ItemRow({ item, luxury }: Props) {
  const prices = String(item.price).split(",");
  const unavailable = item.visible === false;

  if (!luxury) return null;

  return (
    <div className="flex justify-between items-center py-3 md:py-4 px-4 md:px-6 border-b border-gray-200">
      {/* الاسم والمكونات */}
      <div className="flex-1 min-w-0">
        <span
          className={`block text-md md:text-xl font-[Cairo] font-bold truncate
            ${unavailable ? "line-through text-[#231F20]/40" : "text-[#231F20]"}`}
        >
          {item.name}
        </span>

        {!unavailable && item.ingredients && (
          <span className="block text-[10px] sm:text-xs mt-1 truncate font-[Cairo] font-normal text-gray-500">
            {item.ingredients}
          </span>
        )}
      </div>

      {/* السعر أو نص غير متوفر */}
      <div className="shrink-0 text-right flex items-center gap-2">
        {unavailable ? (
          <span className="text-sm sm:text-base text-[#ED1B24] font-[Cairo] font-medium">
            غير متوفر حالياً
          </span>
        ) : (
          <>
            {prices.map((p, i) => (
              <span
                key={i}
                className="
                  text-[#D3AC69]
                  font-[Cairo] font-bold
                  text-lg sm:text-lg
                  px-2 py-0.5
                  rounded-md
                  text-shadow-xs text-shadow-[#cc9e4d]
                  
                "
              >
                {p.trim()}₪
              </span>
            ))}

            {item.priceTw && Number(item.priceTw) > 0 && (
              <span className="px-2 py-0.5 rounded-md bg-[#fdf3e4] text-[#D3AC69] text-xs sm:text-sm font-[Cairo] font-bold border border-[#D3AC69]">
                TW {item.priceTw}₪
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
}
