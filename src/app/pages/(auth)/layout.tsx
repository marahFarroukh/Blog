import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className=" h-screen flex flex-col justify-between">
        <Link
          href="/"
          className="bg-green-800 border mt-6 ml-6 text-white font-bold py-2 px-4 max-w-40 rounded-md  hover:bg-green-950 disabled:bg-gray-500"
        >
          Back To Home
        </Link>
        <section className="h-[calc(100vh-136px)] w-full flex justify-center items-center">
          {children}
        </section>
        <Footer />
      </div>
    </>
  );
}
