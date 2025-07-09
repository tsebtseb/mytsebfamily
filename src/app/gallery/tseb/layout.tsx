"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/userContext";
import { PasswordDialog } from "@/app/components/PasswordDialog";
import { usePathname } from "next/navigation";

const protectedRoutes = ["/gallery/mama", "/gallery/dada", "/gallery/bro", "/gallery/tseb"];

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, login } = useAuth();
  const [showDialog, setShowDialog] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    let mounted = true;

    const checkAuth = () => {
      if (mounted) {
        if (protectedRoutes.includes(pathname) && !isAuthenticated(pathname)) {
          setShowDialog(true);
        } else {
          setShowDialog(false);
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
            {(!protectedRoutes.includes(pathname) || isAuthenticated(pathname)) && (
              <div className="main">{children}</div>
            )}
          </section>
        </main>
      </div>
    </>
  );
}
