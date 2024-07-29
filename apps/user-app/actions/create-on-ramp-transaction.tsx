"use server";

import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { prisma } from "@venmo/prisma/client";

export const createOnRampTransaction = async ({
  provider,
  amount,
}: {
  provider: string;
  amount: number;
}) => {
  try {
    const session = await getServerSession(authOptions);
    const token = (Math.random() * 1000).toString();

    if (!session?.user || !session?.user?.id) {
      return {
        message: "Unauthenticated Request.",
      };
    }

    await prisma.onRampTransaction.create({
      data: {
        provider: provider,
        status: "Processing",
        startTime: new Date(),
        token: token,
        userId: Number(session?.user?.id),
        amount: amount * 100,
      },
    });

    return {
      message: "Transaction is creaeted.",
    };
  } catch (error) {
    console.error(error);
    return {
      message: "Something went wrong",
    };
  }
};
