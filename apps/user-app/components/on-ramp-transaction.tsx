import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@venmo/ui/components/ui/card";

export const OnRampTransaction: React.FC<{
  transactions: {
    time: Date;
    amount: number;
  }[];
}> = ({ transactions }) => {
  if (!transactions.length) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center pb-12 pt-8">No Recent transactions</div>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="pt-2">
          {transactions.map((t, index) => (
            <div key={index} className="flex justify-between">
              <div>
                <div className="text-sm">Received INR</div>
                <div className="text-slate-600 text-xs">
                  {t.time.toDateString()}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                + Rs {t.amount / 100}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
