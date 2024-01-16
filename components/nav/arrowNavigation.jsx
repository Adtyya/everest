import Image from "next/image";

function ArrowNavigationRight({ ...props }) {
  return (
    <button className="w-8 h-8 relative" {...props}>
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

function ArrowNavigationLeft({ ...props }) {
  return (
    <button className="w-8 h-8 relative" {...props}>
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
