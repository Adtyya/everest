export default function Button({
  children,
  className,
  backgroundVariant,
  ...props
}) {
  const backgroundType =
    backgroundVariant === "primary"
      ? "bg-typ-primary disabled:!bg-box-btn-disabled disabled:!text-box-btn-text-disabled disabled:cursor-not-allowed "
      : backgroundVariant === "secondary"
      ? "bg-box-low-white disabled:!bg-box-btn-disabled disabled:!text-box-btn-text-disabled disabled:cursor-not-allowed "
      : backgroundVariant === "transparent"
      ? "bg-transparent disabled:!bg-box-btn-disabled disabled:!text-box-btn-text-disabled disabled:cursor-not-allowed "
      : backgroundVariant === "outline-primary"
      ? "bg-transparent border border-1 border-typ-primary !rounded-full shadow-lg"
      : "bg-red-500";
  return (
    <button
      className={`${className} px-7 py-2 rounded-xl ${backgroundType}`}
      {...props}
    >
      {children}
    </button>
  );
}
