export default function Paragraph({ className, color, children }) {
  const colors = color ? color : "text-typ-primary";

  return (
    <p className={`capitalize text-base ${colors} ${className}`}>{children}</p>
  );
}
