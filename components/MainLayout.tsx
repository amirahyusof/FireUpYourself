
import NavigationBar from "./navigationBar";
import Footer from "@/components/footer";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main className="overflow-hidden">
        {children}
      </main>
      <NavigationBar />
      <Footer />
    </div>
  );
}