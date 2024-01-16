export default function PricingCard({ children, className }) {
  return (
    <div
      className={`${className} w-full h-full shadow-pricing hover:shadow-pricing-active outline outline-transparent duration-300 hover:-translate-y-1 hover:outline-typ-primary rounded-2xl p-3.5 bg-white`}
    >
      {children}
    </div>
  );
}
