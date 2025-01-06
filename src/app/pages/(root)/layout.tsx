import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className=" h-screen flex flex-col justify-between ">
        <NavBar />
        <section>{children}</section>
        <Footer />
      </div>
    </>
  );
}
