import { getServerSession } from "next-auth";

import { prisma } from "@venmo/prisma/client";
import { authOptions } from "@/lib/auth";
import { SendCard } from "@/components/send-card";
import { P2PTransfer } from "@/components/p2p-transfer";

async function getP2PTransfers() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.p2Ptransfer.findMany({
    where: {
      fromUserId: Number(session?.user?.id),
    },
  });
  return txns.map((t: any) => ({
    time: t.timestamp,
    amount: t.amount,
  }));
}

export default async function P2P() {
  const transfers = await getP2PTransfers();

  return (
    <div className="flex flex-col h-full w-full p-8 select-none">
      <div className="text-[#008CFF] font-bold text-[2rem] py-4">
        P2P Transfer
      </div>
      <div className="grid grid-cols-2 w-full justify-center items-center">
        <div className="flex justify-center items-center ml-[3rem] h-[40rem]">
          <SendCard />
        </div>
        <div className="h-full w-full mt-[69px] -ml-[6rem]">
          <P2PTransfer transfers={transfers} />
        </div>
      </div>
    </div>
  );
}
