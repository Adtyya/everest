export default function Button({ children, className }) {
  return (
    <button className={`${className} px-3.5 py-1.5 rounded-2xl bg-typ-primary`}>
      {children}
    </button>
  );
}
