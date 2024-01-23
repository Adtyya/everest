import Image from "next/image";

function ArrowNavigationRight({ height = "h-8", width = "w-8", ...props }) {
  return (
    <button className={`${height} ${width} relative`} {...props}>
      <Image
        src="/images/global/arrow.png"
        alt="arrow-navigation"
        fill
        objectFit="contain"
        className="bg-box-low-white rounded-full p-2 shadow-arrow-nav"
      />
    </button>
  );
}

function ArrowNavigationLeft({ height = "h-8", width = "w-8", ...props }) {
  return (
    <button className={`${height} ${width} relative`} {...props}>
      <Image
        src="/images/global/arrow-left.png"
        alt="arrow-navigation"
        fill
        objectFit="contain"
        className="bg-box-low-white rounded-full p-2 shadow-arrow-nav"
      />
    </button>
  );
}

export { ArrowNavigationRight, ArrowNavigationLeft };
