export function FeaturedServices() {
  return (
    <section className="relative flex w-full min-h-screen items-center justify-center overflow-hidden bg-white px-6 py-20 lg:px-16">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="mb-12 text-center text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          Redefining Outdoor Spaces with Exceptional <br/>
          <span className="text-green-600">Artificial Grass Solutions</span>
        </h2>

        <div className="space-y-6 text-center text-lg leading-relaxed text-slate-600 md:text-xl">
          <p>
            <strong className="font-bold text-slate-900">Sabaysis Sports & Infra</strong> stands as the foremost destination for exceptional artificial grass solutions, where quality seamlessly meets innovation. With unmatched expertise and state-of-the-art manufacturing, we redefine outdoor spaces, offering customized solutions that exceed expectations.
          </p>
          <p>
            Committed to global quality standards, <strong className="font-bold text-slate-900">Sabaysis Sports & Infra</strong> ensures durability, resilience, and aesthetic appeal in every product. Our dedication to sustainability is reflected in eco-friendly practices and the use of recyclable materials.
          </p>
          <p>
            From lush residential lawns to cutting-edge sports surfaces, <strong className="font-bold text-slate-900">Sabaysis Sports & Infra</strong> provides a comprehensive range of products tailored to diverse needs, setting a new standard in the artificial grass industry.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-6">
          <div className="relative">
             <div className="flex items-center gap-4">
                <div className="h-12 w-1 bg-slate-900" />
                <div className="text-left">
                   <h3 className="text-xl font-bold text-slate-900">Sabaysis Sports & Infra</h3>
                   <p className="text-sm font-medium uppercase tracking-wide text-slate-500">Excellence in Sports Infrastructure</p>
                </div>
             </div>
          </div>
          
          <button className="mt-8 rounded-full border-2 border-slate-900 bg-transparent px-10 py-3 text-sm font-bold uppercase tracking-widest text-slate-900 transition-all hover:bg-slate-900 hover:text-white">
            Drop Your Enquiry
          </button>
        </div>
      </div>
    </section>
  );
}
