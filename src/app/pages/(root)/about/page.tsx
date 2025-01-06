import Link from "next/link";

function AboutPage() {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex justify-center items-center max-w-4xl p-4 mx-auto mt-9 flex-col gap-9 bg-slate-300 border-green-800 border rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-green-800 border-b-4 border-green-800">
          About Us
        </h1>
        <p className="rtl text-lg ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dolor
          voluptatum reiciendis aliquid impedit sunt veritatis. Ex id repellat
          harum.
        </p>
        <button className="bg-green-800 border mt-2 text-white font-bold py-2 px-4 rounded-md  hover:bg-green-950 disabled:bg-gray-500">
          <Link href="https://vica.website.com">Contact Us</Link>
        </button>
      </div>
    </div>
  );
}

export default AboutPage;
