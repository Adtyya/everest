export default function GradientCard({ children, className }) {
  return (
    <div className={`${className} bg-gradient-card w-full rounded-2xl p-3.5`}>
      {children}
    </div>
  );
}
