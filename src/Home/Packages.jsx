const packages = [
  { place: "Sydney", img: "sydney.jpg" },
  { place: "Hawaii", img: "hawaii.jpg" },
  { place: "Auckland", img: "auckland.jpg" },
];

export default function Packages() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-center mb-6">Amazing Holidays Packages</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map(({ place, img }) => (
          <div key={place} className="relative rounded overflow-hidden h-60">
            <img src={`/images/packages/${img}`} alt={place} className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
              <h3 className="text-xl font-bold">{place}</h3>
              <button className="mt-2 bg-primary px-4 py-1 rounded">Get Quote</button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right mt-4">
        <a href="#" className="text-primary font-semibold hover:underline">
          Explore more packages →
        </a>
      </div>
    </section>
  );
}
