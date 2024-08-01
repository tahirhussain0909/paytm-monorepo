"use client";

import { useState } from "react";

import { Button } from "@venmo/ui/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@venmo/ui/components/ui/card";
import { Input } from "@venmo/ui/components/ui/input";
import { createP2PTransfer } from "@/actions/create-p2p-transfer";

export const SendCard = () => {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <Card className="w-[25rem] h-[20rem]">
      <CardHeader>
        <CardTitle>Send</CardTitle>
      </CardHeader>
      <CardContent className="space-y-10">
        <Input
          title="Number"
          placeholder="Number"
          className="focus-visible:!outline focus-visible:!outline-2 focus-visible:!outline-[#008CFF] focus-visible:!ring-0 focus-visible:!outline-offset-0"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
        <Input
          title="Amount"
          placeholder="Amount"
          className="focus-visible:!outline focus-visible:!outline-2 focus-visible:!outline-[#008CFF] focus-visible:!ring-0 focus-visible:!outline-offset-0"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <div className="flex justify-center mt-4">
          <Button
            variant="outline"
            onClick={async () => {
              await createP2PTransfer(number, Number(amount) * 100);
            }}
          >
            Send
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
