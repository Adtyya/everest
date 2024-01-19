export default function Button({
  children,
  className,
  backgroundVariant,
  ...props
}) {
  const backgroundType =
    backgroundVariant === "primary"
      ? "bg-typ-primary"
      : backgroundVariant === "secondary"
      ? "bg-box-low-white"
      : backgroundVariant === "transparent"
      ? "bg-transparent"
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
