export default function PricingCard({ children, className }) {
  return (
    <div
      className={`${className} w-full h-full shadow-pricing rounded-2xl p-3.5`}
    >
      {children}
    </div>
  );
}
