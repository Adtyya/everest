export default function Container({ children, className }) {
  return (
    <div className={`container px-3 lg:px-0 mx-auto ${className}`}>
      {children}
    </div>
  );
}
