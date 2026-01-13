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
          <span className="block text-xl md:text-xl font-[Zain-ExtraBold] text-[#231F20] truncate">
            {item.name}
          </span>
          {item.ingredients && (
            <span className="block text-sm md:text-base text-gray-500 mt-1 truncate font-[Zain-italic]">
              {item.ingredients}
            </span>
          )}
        </div>

        {/* السعر الأساسي وTW جنب بعض */}
        <div className="shrink-0 text-right font-[Zain-ExtraBold] text-[#ED1B24] text-lg md:text-lg whitespace-nowrap ml-6 flex items-center space-x-2">
          {/* السعر الأساسي */}
          {prices.map((p, i) => (
            <span key={i}>{p.trim()}₪</span>
          ))}

          {/* سعر TW لو موجود */}
          {item.priceTw && item.priceTw > 0 && (
            <div className="px-2 py-1 bg-[#FDEDEE] text-[#C71F1F] rounded-xl text-sm md:text-base font-[Zain-ExtraBold]">
              TW {item.priceTw}₪
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}
