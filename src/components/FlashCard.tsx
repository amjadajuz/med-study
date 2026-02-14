import { RotateCw } from 'lucide-react';
import React, { useState } from 'react'

type Props = {
    front: string;
    back: string;
    tags: string[];
}

const FlashCard = (props: Props) => {
     const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className={`flip-card-container ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front border-b bg-background text-foreground border rounded-lg shadow-sm cursor-pointer">
          <h3 className="text-lg font-semibold mb-2">Question:</h3>
          <p>{props.front}</p>
          <div className="p-4 bg-background text-foreground">
        <h3 className="text-lg font-semibold mb-2">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {props.tags.map((tag, index) => (
            <span key={index} className="bg-accent text-foreground px-2 py-1 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 pt-4 border-t border-border/50 mt-4 text-[0.875rem] text-muted-foreground">
              <RotateCw className="w-4 h-4" />
              <span>Click to reveal answer</span>
            </div>
      </div>
        </div>
        <div className="flip-card-back border-b bg-secondary text-primary rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Answer:</h3>
          <p>{props.back}</p>
            <div className="flex items-center justify-center gap-2 pt-4 border-t border-border/50 mt-4 text-[0.875rem] text-muted-foreground">
              <RotateCw className="w-4 h-4" />
              <span>Click to flip back</span>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default FlashCard