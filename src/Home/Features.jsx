import { FaPlaneDeparture, FaHeadset, FaMoneyCheckAlt, FaClock } from "react-icons/fa";

const items = [
  { icon: <FaPlaneDeparture className="text-primary"/>, title: "Easy Airline Reservation", desc: "Book with more than 450 airlines on call and get upto $450 off" },
  { icon: <FaHeadset className="text-primary"/>, title: "World Class Customer Support", desc: "Customer support is 24*7 available and will take care of all your travel needs." },
  { icon: <FaMoneyCheckAlt className="text-primary"/>, title: "Pay The Way You Like", desc: "With more than 10 payment options your payments are easier and secure" },
  { icon: <FaPlaneDeparture className="text-primary"/>, title: "24 Hours Free Cancellation", desc: "Book now and make free cancellation within 24 hours of booking the flights." },
];

export default function Features() {
  return (
    <section className="mt-16 grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-center md:text-left">Why Book Premium Fare Travels?</h2>
        <div className="space-y-4">
          {items.map(({ icon, title, desc }) => (
            <div key={title} className="flex items-start space-x-4 p-4 border rounded bg-white">
              <div className="text-2xl">{icon}</div>
              <div>
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src="/images/promo.jpg" alt="Promo" className="rounded-lg shadow-lg object-cover w-full h-80 md:h-auto"/>
    </section>
  );
}
