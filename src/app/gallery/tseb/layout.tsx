"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/userContext";
import { PasswordDialog } from "@/app/components/PasswordDialog";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, login } = useAuth();
  const [showDialog, setShowDialog] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    let mounted = true;

    const checkAuth = () => {
      if (mounted) {
        if (!isAuthenticated(pathname)) {
          setShowDialog(true);
        }
        setIsChecking(false);
      }
    };

    checkAuth();

    return () => {
      mounted = false;
    };
  }, [isAuthenticated, pathname]);

  const handleSuccess = () => {
    login(pathname);
    setShowDialog(false);
  };

  if (isChecking) {
    return null; // or a loading spinner
  }


  return (
    <>
    <PasswordDialog 
        isOpen={showDialog} 
        onSuccess={handleSuccess} 
        route={pathname} 
      />
      <div className="flex w-full h-screen">
        <main className="flex-1">
          <section className="min-h-screen w-full">
            {isAuthenticated(pathname)&&(<div className="main">{children}</div>)}
          </section>
        </main>
      </div>
    </>
  );
}
