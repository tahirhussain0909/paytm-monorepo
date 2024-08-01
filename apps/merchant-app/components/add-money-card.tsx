"use client";

import { useState, useEffect } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@venmo/ui/components/ui/card";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@venmo/ui/components/ui/alert";

import { Button } from "@venmo/ui/components/ui/button";
import { Input } from "@venmo/ui/components/ui/input";
import { SUPPORTED_BANKS } from "@/utils/dummy-bank-data";
import { createOnRampTransaction } from "../actions/create-on-ramp-transaction";
import { CustomSelect } from "./custom-select";

export const AddMoneyCard = () => {
  const [amount, setAmount] = useState(0);
  const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
  const [alertMessage, setAlertMessage] = useState("");
  const [hasSelectedBank, setHasSelectedBank] = useState(false);
  const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");

  useEffect(() => {
    const handleClickOutside = () => {
      if (alertMessage) {
        setAlertMessage("");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [alertMessage]);

  const handleAddMoney = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!amount) {
      setAlertMessage("Please enter an amount.");
    } else if (!hasSelectedBank) {
      setAlertMessage("Please select a bank.");
    } else {
      await createOnRampTransaction({ provider, amount });
      // window.location.href = redirectUrl || "";
    }
  };

  return (
    <Card className="space-y-2">
      <CardHeader>
        <CardTitle>Add Money</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full">
          <Input
            title={"Amount"}
            placeholder={"Amount"}
            className="focus-visible:!outline focus-visible:!outline-2 focus-visible:!outline-[#008CFF] focus-visible:!ring-0 focus-visible:!outline-offset-0"
            onChange={(e) => setAmount(Number(e.target.value))}
            value={amount}
          />
          <CardTitle className="py-4 text-left">Bank</CardTitle>
          <CustomSelect
            onSelect={(value) => {
              setRedirectUrl(
                SUPPORTED_BANKS.find((x) => x.name === value)?.redirectUrl || ""
              );
              setProvider(
                SUPPORTED_BANKS.find((x) => x.name === value)?.name || ""
              );
              setHasSelectedBank(true);
            }}
            options={SUPPORTED_BANKS.map((x) => ({
              key: x.name,
              value: x.name,
            }))}
          />
          {alertMessage && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <Alert
                className="max-w-md p-[25px]"
                onClick={(e) => e.stopPropagation()}
              >
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>{alertMessage}</AlertDescription>
              </Alert>
            </div>
          )}
          <div className="flex justify-center pt-4">
            <Button variant="outline" onClick={handleAddMoney}>
              Add Money
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
