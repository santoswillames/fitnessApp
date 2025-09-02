// components/custom/CustomCheckbox.tsx
import React from "react";
import { VStack } from "components/ui/vstack";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from "components/ui/checkbox";
import { CheckIcon } from "components/ui/icon";

type CustomCheckboxGroupProps = {
  value: string[];
  onChange: (keys: string[]) => void;
  children: React.ReactNode;
};

export function CustomCheckboxGroup({
  value,
  onChange,
  children,
}: CustomCheckboxGroupProps) {
  return (
    <CheckboxGroup
      value={value}
      onChange={onChange}
      className="w-full"
    >
      <VStack space="xl">{children}</VStack>
    </CheckboxGroup>
  );
}

type CustomCheckboxItemProps = {
  value: string;
  label: string;
};

export function CustomCheckboxItem({ value, label }: CustomCheckboxItemProps) {
  return (
    <Checkbox
      value={value}
      className="relative w-full h-[72px] items-center justify-center rounded-[20px] border border-[#D9D9D9] data-[checked=true]:border-[#262135] data-[checked=true]:border-2"
    >
      <CheckboxIndicator className="absolute rounded-full size-5 -top-2 right-0 data-[checked=false]:border-0">
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>

      <CheckboxLabel className="font-montserrat-semibold text-[#262135] text-center text-xs">
        {label}
      </CheckboxLabel>
    </Checkbox>
  );
}
