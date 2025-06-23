export default function Layout({ children }: { children: React.ReactNode }) {
  return (
   <main className="flex h-screen">
    Sidebar
    <section className="flex h-full flex-1 flex-col">
        Mobile navigation header
        <div className="main">{children}</div>
    </section>
   </main>
  );
}