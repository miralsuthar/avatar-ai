import Image from "next/image";
import { TiTick } from "react-icons/ti";

type ImageCardProps = {
  src: string;
  onClick?: () => void;
  isSelected?: boolean;
};

export function NftImageCard({ src, onClick, isSelected }: ImageCardProps) {
  return (
    <div
      onClick={onClick}
      className={`overflow-hidden ${
        isSelected &&
        "border-[5px] border-blue-500 after:content-[''] after:absolute after:right-0 after:top-0 after:border-t-[3rem] after:border-l-[3rem] after:border-t-blue-500 after:border-l-transparent"
      }  relative rounded-lg aspect-square h-[15rem] hover:scale-105 duration-300 cursor-pointer  `}
    >
      {isSelected && (
        <TiTick color="white" className="absolute top-2 right-2" />
      )}
      <img
        loading="lazy"
        src={src}
        sizes="(max-width: 640px) 10vw,
        (max-width: 1200px) 30vw,"
        alt="Nft image"
        className="object-cover object-center"
      />
    </div>
  );
}
