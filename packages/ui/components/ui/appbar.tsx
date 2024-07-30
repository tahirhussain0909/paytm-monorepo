"use client";

import { Button } from "@ui/components/ui/button";
import { Avatar, AvatarFallback } from "./avatar";

interface AppbarProps {
  logo: React.ReactNode;
  user?: {
    name?: string | null;
  } | null;
  onSignin?: () => void;
  onSignout?: () => void;
  buttonTexts?: {
    login: string;
    logout: string;
  };
  showButton?: boolean;
  buttonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  buttonClass?: string;
  avatarImage?: string;
}

export const AppBar = ({
  logo,
  user,
  onSignin,
  onSignout,
  showButton = true,
  buttonTexts = { login: "Login", logout: "Logout" },
  buttonClass,
  buttonVariant,
}: AppbarProps) => {
  return (
    <header className="px-4 lg:px-6 h-[10vh] flex justify-between items-center bg-gradient-to-l from-[hsl(221.2,63.2%,53.3%)] to-[hsl(210,40%,96.1%)]">
      {logo}
      {showButton ? (
        <Button
          variant={buttonVariant}
          className={buttonClass}
          onClick={user ? onSignout : onSignin}
        >
          {user ? buttonTexts.logout : buttonTexts.login}
        </Button>
      ) : (
        <Avatar className="cursor-pointer h-10">
          <AvatarFallback className="select-none">CN</AvatarFallback>
        </Avatar>
      )}
    </header>
  );
};
