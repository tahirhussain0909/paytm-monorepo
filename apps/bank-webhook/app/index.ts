import express, { Request, Response } from "express";
import { prisma } from "@venmo/prisma/client";

const app = express();
const PORT = 3003;

app.use(express.json());

app.post("/hdfcWebhook", async (req: Request, res: Response) => {
  try {
    const paymentInformation = {
      token: req.body.token,
      userId: Number(req.body.user_identifier),
      amount: Number(req.body.amount),
    };

    await prisma.$connect();
    await prisma.$transaction(async (tx: any) => {
      const balance = await tx.balance.findUnique({
        where: { userId: paymentInformation.userId },
      });

      if (!balance) {
        await tx.balance.create({
          data: {
            userId: paymentInformation.userId,
            amount: paymentInformation.amount,
            locked: 0,
          },
        });
      } else {
        await tx.balance.update({
          where: { userId: paymentInformation.userId },
          data: {
            amount: { increment: paymentInformation.amount },
          },
        });
      }

      await tx.onRampTransaction.update({
        where: { token: paymentInformation.token },
        data: { status: "Success" },
      });
    });

    await prisma.$disconnect();
    res.status(200).json({ message: "Captured" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.listen(PORT, () => {
  console.log("express server is listening on port", PORT);
});
