import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";

interface props {
  children: React.ReactNode;
}

export default function Layout({ children }: Readonly<props>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="flex-1 bg-[#F4F4F0]">

      {children}
      </div>
      <Footer/>
    </div>
  );
}
