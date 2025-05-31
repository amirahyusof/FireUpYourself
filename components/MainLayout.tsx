
import NavigationBar from "./navigationBar";


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
      
    </div>
  );
}