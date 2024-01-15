export default function Button({ children, className, backgroundVariant }) {
  const backgroundType =
    backgroundVariant === "primary"
      ? "bg-typ-primary"
      : backgroundVariant === "secondary"
      ? "bg-box-low-white"
      : "bg-red-500";
  return (
    <button className={`${className} px-5 py-1.5 rounded-xl ${backgroundType}`}>
      {children}
    </button>
  );
}
