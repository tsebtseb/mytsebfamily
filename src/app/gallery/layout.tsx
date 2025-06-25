import AppSidebar from "../components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex w-full h-screen">
        <main className="flex-1">
          <SidebarTrigger className="fixed top-4 left-4 z-50 h-14 w-14 rounded-full bg-warm-pink text-white shadow-lg hover:bg-warm-pink/90 transition-all duration-300 ease-in-out" />
          <section className="min-h-screen w-full p-4">
            <div className="main">{children}</div>
          </section>
        </main>
      </div>
    </SidebarProvider>
  );
}
