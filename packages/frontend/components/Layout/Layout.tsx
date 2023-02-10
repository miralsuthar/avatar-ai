import { Navbar } from "./Navbar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen bg-black px-10">
      <Navbar />
      {children}
    </div>
  );
}