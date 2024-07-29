import { getServerSession } from "next-auth";

import { prisma } from "@venmo/prisma/client";
import { authOptions } from "@/lib/auth";
import { BalanceCard } from "@/components/balance-card";
import { OnRampTransaction } from "@/components/on-ramp-transaction";
import { AddMoneyCard } from "@/components/add-money-card";

async function getBalance() {
  const session = await getServerSession(authOptions);
  const balance = await prisma.balance.findFirst({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return {
    amount: balance?.amount || 0,
    locked: balance?.locked || 0,
  };
}

async function getOnRampTransactions() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return txns.map((t: any) => ({
    time: t.startTime,
    amount: t.amount,
  }));
}

export default async function Transfer() {
  const balance = await getBalance();
  const transactions = await getOnRampTransactions();

  return (
    <div className="flex flex-col h-full w-full p-8 select-none">
      <div className="text-[#008CFF] font-bold text-[2rem] py-4">Transfer</div>
      <div className="grid grid-cols-2 space-x-4 w-full">
        <div className="h-full w-full">
          <AddMoneyCard />
        </div>
        <div className="space-y-4">
          <BalanceCard amount={balance.amount} locked={balance.locked} />
          <div>
            <OnRampTransaction transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
}
