import AppSidebar from "../components/AppSidebar";
import { SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import HomeNavbar from "../components/HomeNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
       <AppSidebar />
      <main className="flex min-h-screen w-full bg-zinc-200"> 
        {/* bg-[#36393e] */}
        <SidebarTrigger className="fixed top-4 left-4 z-50 h-14 w-14 rounded-full bg-warm-pink text-white shadow-lg hover:bg-warm-pink/90 transition-all duration-300 ease-in-out" />
        <section className="flex h-full flex-1 flex-col">
          <HomeNavbar />
          <div className="main">{children}</div>
        </section>
      </main>
    </SidebarProvider>
  );
}
