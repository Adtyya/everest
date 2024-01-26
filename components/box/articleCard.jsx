import Image from "next/image";

export default function ArticleCard({ height = "h-44", name, image }) {
  return (
    <div
      className={`w-full ${height} rounded-2xl overflow-hidden relative drop-shadow-sm group cursor-pointer`}
    >
      <Image
        src={
          image
            ? image
            : "https://images.unsplash.com/photo-1704972841788-86fac20fc87e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="example"
        fill
        objectFit="cover"
        className="group-hover:scale-105 duration-300"
      />
      <div className="absolute bottom-0 w-full translate-y-0 group-hover:translate-y-full duration-300">
        <div className="w-full bg-box-primary-fade p-3">
          <h4 className="text-lg font-medium text-white">
            {name ? name : "Lorem Ipsum"}
          </h4>
        </div>
      </div>
    </div>
  );
}
