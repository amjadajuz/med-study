import { RotateCw } from "lucide-react";
import { useState } from "react";

interface FlashCardProps {
  front: string;
  back: string;
  tags: string[];
}

const FlashCard = ({ front, back, tags }: FlashCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flip-card-container ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
      role="button"
      tabIndex={0}
      aria-label={isFlipped ? "Flip to question" : "Flip to answer"}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleFlip();
        }
      }}
    >
      <div className="flip-card-inner">
        {/* Front Side - Question */}
        <div className="flip-card-front">
          <div className="flip-card-content">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Question:</h3>
            <p className="text-sm md:text-base leading-relaxed mb-4 md:mb-6">{front}</p>
            {tags.length > 0 && (
              <div>
                <h4 className="text-xs md:text-sm font-semibold mb-2 uppercase tracking-wide">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-accent text-foreground px-2 py-1 rounded-full text-xs md:text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="flip-card-footer text-foreground">
            <RotateCw className="w-4 h-4" color="var(--color-foreground)" />
            <span>Click to reveal answer</span>
          </div>
        </div>

        {/* Back Side - Answer */}
        <div className="flip-card-back">
          <div className="flip-card-content">
            <h3 className="text-base md:text-lg text-background font-semibold mb-3 md:mb-4">Answer:</h3>
            <p className="text-sm md:text-base text-background leading-relaxed">{back}</p>
          </div>
          <div className="flip-card-footer text-background">
            <RotateCw className="w-4 h-4" />
            <span>Click to flip back</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
