export default function Container({ children, className }) {
  return (
    <div className={`w-full px-3 lg:px-0 max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
}
