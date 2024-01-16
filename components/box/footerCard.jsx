export default function FooterCard({ children, className }) {
  return (
    <div className={`${className} bg-box-low-white w-full rounded-2xl p-3.5`}>
      {children}
    </div>
  );
}
