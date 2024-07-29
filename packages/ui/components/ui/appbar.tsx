"use client";

import { Button } from "@ui/components/ui/button";
import { Avatar, AvatarFallback } from "./avatar";

interface AppbarProps {
  logoSrc?: string;
  user?: {
    name?: string | null;
  } | null;
  onSignin?: () => void;
  onSignout?: () => void;
  onLogoClick?: () => void;
  buttonTexts?: {
    login: string;
    logout: string;
  };
  showLogo?: boolean;
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
  logoSrc = "https://generated.vusercontent.net/placeholder.svg",
  user,
  onSignin,
  onSignout,
  onLogoClick,
  buttonTexts = { login: "Login", logout: "Logout" },
  showLogo = true,
  showButton = true,
  buttonClass,
  buttonVariant,
}: AppbarProps) => {
  return (
    <header className="flex w-full justify-between items-center bg-white py-8 px-8">
      {showLogo && (
        <img
          src={logoSrc}
          alt="logo"
          className="cursor-pointer h-8"
          onClick={onLogoClick}
        />
      )}
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
