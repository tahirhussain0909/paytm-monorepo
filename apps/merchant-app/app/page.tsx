"use client";

import { AppBar } from "@venmo/ui/components/ui/appbar";
import { signIn, signOut, useSession } from "next-auth/react";

export default function HomeForm() {
  const session = useSession();

  return (
    <AppBar user={session.data?.user} onSignin={signIn} onSignout={signOut} />
  );
}
