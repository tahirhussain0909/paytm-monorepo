import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@venmo/ui/components/ui/select";

type Option = {
  key: string;
  value: string;
};

export const CustomSelect = ({
  onSelect,
  options,
}: {
  onSelect: (value: string) => void;
  options: Option[];
}) => {
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger className="focus:outline focus:outline-2 focus:outline-[#008CFF] focus:ring-0 focus:outline-offset-0 focus">
        <SelectValue placeholder="Select a bank" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.key} value={option.value}>
            {option.value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
