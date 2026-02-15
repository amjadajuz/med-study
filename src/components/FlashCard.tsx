import { RotateCw } from "lucide-react";
import React, { useState } from "react";

type Props = {
  front: string;
  back: string;
  tags: string[];
};

const FlashCard = (props: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div
      className={`flip-card-container ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front border-border bg-background text-foreground border rounded-lg shadow-sm cursor-pointer flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Question:</h3>
            <p>{props.front}</p>
            <div className="bg-background text-foreground">
              <h3 className="text-lg font-semibold mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {props.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-accent text-foreground px-2 py-1 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 pt-4 border-t border-border/50 mt-4 text-[0.875rem]">
            <RotateCw className="w-4 h-4" color="var(--color-foreground)" />
            <span className="text-foreground">Click to reveal answer</span>
          </div>
        </div>
        <div className="flip-card-back border-b bg-secondary text-primary rounded-lg flex flex-col justify-between cursor-pointer">
          <div>
            <h3 className="text-lg text-background font-semibold mb-2">Answer:</h3>
            <p className="text-background">{props.back}</p>
          </div>
          <div className="flex items-center justify-center gap-2 pt-4 border-t border-border/50 mt-4 text-[0.875rem] text-background">
            <RotateCw className="w-4 h-4" />
            <span>Click to flip back</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
