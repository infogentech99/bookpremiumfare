import { FaPhoneAlt } from "react-icons/fa";

export default function SubscribeForm() {
  return (
    <section className="bg-primary text-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="mb-6 lg:mb-0 text-center lg:text-left">
          <h3 className="text-xl font-semibold">Sign up today and never miss another deal again!</h3>
        </div>
        <form className="flex w-full lg:w-auto space-x-2">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 p-2 rounded-l border-0"
          />
          <button type="submit" className="bg-white text-primary px-4 rounded-r font-semibold">
            Subscribe
          </button>
        </form>
        <div className="flex items-center mt-6 lg:mt-0 space-x-2">
          <FaPhoneAlt />
          <a href="tel:+18888291141" className="font-semibold">Call on: +1-888-829-1141</a>
        </div>
      </div>
    </section>
  );
}
