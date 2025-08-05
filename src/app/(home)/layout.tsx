import { Navbar } from "./components/navbar";

interface props {
  children: React.ReactNode;
}

export default function Layout({ children }: Readonly<props>) {
  return (
    <div className="flex flex-col min-h-screen">
<Navbar/>
      {children}
    </div>
  );
}
