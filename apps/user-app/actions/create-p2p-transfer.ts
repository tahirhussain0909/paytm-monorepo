"use server";

import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { prisma } from "@venmo/prisma/client";

export const createP2PTransfer = async (to: string, amount: number) => {
  try {
    const session = await getServerSession(authOptions);
    const from = session?.user?.id;

    if (!from) {
      return {
        message: "Error while sending",
      };
    }

    const toUser = await prisma.user.findFirst({
      where: {
        number: to,
      },
    });

    if (!toUser) {
      console.error(`Recipient with number ${to} not found`);
      return {
        message: "User not found",
      };
    }

    await prisma.$transaction(async (tx: any) => {
      await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(from)} FOR UPDATE`;

      const fromBalance = await tx.balance.findUnique({
        where: { userId: Number(from) },
      });

      if (!fromBalance || fromBalance.amount < amount) {
        throw new Error("Insufficient Funds");
      }

      await new Promise((r) => setTimeout(r, 2000));

      await tx.balance.update({
        where: { userId: Number(from) },
        data: { amount: { decrement: amount } },
      });

      // const recipientBalance = await tx.balance.findUnique({
      //   where: { userId: toUser.id },
      // });

      // if (!recipientBalance) {
      //   throw new Error(
      //     `Recipient's balance not found for user ID ${toUser.id}`
      //   );
      // }

      await tx.balance.update({
        where: { userId: toUser.id },
        data: { amount: { increment: amount } },
      });

      await tx.p2Ptransfer.create({
        data: {
          fromUserId: Number(from),
          toUserId: toUser.id,
          amount: Number(amount),
          timestamp: new Date(),
        },
      });
    });

    return {
      message: "Transfer successful",
    };
  } catch (error) {
    console.error("Error in p2pTransfer:", error);
    return {
      message: "Something went wrong",
    };
  }
};
