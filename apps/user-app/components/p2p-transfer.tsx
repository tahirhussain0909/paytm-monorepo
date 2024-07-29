import React from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@venmo/ui/components/ui/card";

export const P2PTransfer: React.FC<{
  transfers: {
    time: Date;
    amount: number;
  }[];
}> = ({ transfers }) => {
  if (!transfers.length) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Transfers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center pb-12 pt-8">No Recent Transfers</div>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transfers</CardTitle>
      </CardHeader>
      <CardContent className="h-[35rem] overflow-auto">
        <div className="pt-2">
          {transfers.map((t, index) => (
            <div key={index} className="flex justify-between py-1">
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
