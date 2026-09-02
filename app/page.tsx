import Hero from "@/components/ui/Hero";

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      
      {/* Placeholder content below fold to test scrolling */}
      <section className="h-screen bg-zinc-50 flex items-center justify-center">
        <h2 className="text-3xl font-bold">More Content Here</h2>
      </section>
    </main>
  );
}

