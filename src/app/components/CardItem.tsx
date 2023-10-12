import Image from "next/image";

interface CardItemProps {
  itemData: {
    id: number;
    img: string;
    date: string;
    title: string;
    subTitle: string;
    category: string;
  };
  carousel?: boolean;
}

const CardItem = ({ itemData, carousel }: CardItemProps) => {
  const { img, date, category, title, subTitle } = itemData;
  return (
    <div
      className={`shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] ${
        carousel && "mr-5"
      }`}
    >
      <div className="w-full h-1/2">
        <Image
          src={img}
          alt={"thumbnail image"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col items-center p-3 w-full h-1/2">
        <div className="my-2 w-full flex justify-end">
          <span>{date}</span>
        </div>
        <span className="font-bold text-2xl">{title}</span>
        <span className="font-semibold text-xl mb-3">{subTitle}</span>
        <span className=" bg-amber-600 text-white px-2 rounded-lg">
          {category}
        </span>
      </div>
    </div>
  );
};

export default CardItem;
