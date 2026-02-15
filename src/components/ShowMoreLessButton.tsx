import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Props = {
  expanded: boolean;
  remaining?: number;
  onToggle: () => void;
  className?: string;
};

const ShowMoreLessButton = ({ expanded, remaining = 0, onToggle, className = "" }: Props) => {
  return (
    <button
      onClick={onToggle}
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-md bg-background/80 text-foreground/90 border border-border cursor-pointer`}
      aria-expanded={expanded}
    >
      {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      <span>{expanded ? "Show less" : `Show ${remaining} more`}</span>
    </button>
  );
};

export default ShowMoreLessButton;
