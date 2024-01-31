export default function Container({ children, className }) {
  return (
    <div className={`w-full max-w-7xl px-3 lg:px-0 mx-auto ${className}`}>
      {children}
    </div>
  );
}
