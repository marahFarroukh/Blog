import Link from "next/link";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className=" h-screen flex flex-col justify-between">
      <NavBar />
      <div className="h-full flex justify-center items-center">
        <div className="flex justify-center items-center max-w-4xl p-4 mx-auto mt-9 flex-col gap-9 bg-slate-300 border-green-800 border rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-green-800 border-b-4 border-green-800">
            Vica Blog
          </h1>
          <p className="rtl text-lg  ">
            Welcome to Vica's Blog! We strive to provide exceptional content
            that enriches your mind and stimulates your ideas. Vica Blog offers
            a diverse range of topics, including technology, health, travel,
            self-development, and more, making it an ideal destination for
            anyone aspiring to learn and grow.
          </p>
          <button className="bg-green-800 border mt-2 text-white font-bold py-2 px-4 rounded-md  hover:bg-green-950 disabled:bg-gray-500">
            <Link href="/pages/posts">Show Posts</Link>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
