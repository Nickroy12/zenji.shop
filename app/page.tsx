import Hero from "@/components/ui/Hero";
import ProductCard from "@/components/ui/ProductCard";
import productsData from "@/data.json";

export default function Home() {
  return (
    <main className="flex-grow bg-white">
      <Hero />

      {/* Product Cards Row / Grid Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-7 text-center">COLLECTIONS</h1>
          <ProductCard data={productsData} />
        </div>
      </section>
    </main>
  );
}
