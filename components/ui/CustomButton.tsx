import { cn } from "@/lib/utils";
import React from "react";

const CustomButton = ({
  disabled,
  isRounded,
  text,
}: {
  disabled: boolean;
  isRounded: boolean;
  text?: string;
}) => {
  return (
    <div>
      {/* <button
        className={`text-sm ${disabled ? "bg-gray-300" : "bg-blue-500"} ${
          isRounded ? "rounded-full" : "rounded-md"
        } p-4`}
      ></button> */}
      <button
        className={cn(
          "text-sm",
          disabled ? "bg-gray-300" : "bg-blue-500",
          isRounded ? "rounded-full" : "rounded-md",
          text ? "text-black" : "text-white",
          "p-4"
        )}
      >
        {text ? text : "Default Text"}
      </button>
    </div>
  );
};

export default CustomButton;
