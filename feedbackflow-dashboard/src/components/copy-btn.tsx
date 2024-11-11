"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Clipboard } from "lucide-react";

const CopyBtn = ({ text }: { text: string }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard");
    });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
            <button onClick={() => copyToClipboard(text)} className="absolute p-2 top-0 right-0 text-slate-300">
                <Clipboard />
            </button>
          
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy Code</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CopyBtn;
