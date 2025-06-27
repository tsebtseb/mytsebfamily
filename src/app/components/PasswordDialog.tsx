"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { routePasswords } from "@/context/userContext";
import { usePathname, useRouter } from "next/navigation";
import { FolderLock } from 'lucide-react';

interface PasswordDialogProps {
  isOpen: boolean;
  onSuccess: () => void;
  route: string;
}

const routeDisplayNames: Record<string, string> = {
  mama: "Mommy",
  dada: "Daddy",
  bro: "Timer",
  tseb: "Tseb",
};

const getDisplayName = (route: string) => {
  const routeName = route.split("/").pop();
  return routeDisplayNames[routeName || ""] || routeName || "";
};

export function PasswordDialog({
  isOpen,
  onSuccess,
  route,
}: PasswordDialogProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === routePasswords[pathname as keyof typeof routePasswords]) {
      onSuccess();
      setError(false);
      setPassword("");
    } else {
      setError(true);
    }
  };

  const handleClose = () => {
    router.push("/gallery");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-row gap-x-2 item-self-center"><FolderLock/> Password for {getDisplayName(route)}</DialogTitle>
          <p className="text-muted-foreground px-2">Let me in please!🏠✨</p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 px-2">
          <Input
            type="password"
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={error ? "border-red-500" : ""}
          />
          {error && (
            <div className="flex lex-row justify-between flex-wrap">
              <p className="text-red-500 text-sm">Incorrect password</p>
              <p className="flex-shrink text-primary-blue text-sm">
                hint: lovely birthday
              </p>
            </div>
          )}
          <Button type="submit" className="w-full bg-warm-pink hover:bg-warm-pink/80 active:bg-warm-pink/80" onClick={handleSubmit}>
            Enter with Love 💝
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
