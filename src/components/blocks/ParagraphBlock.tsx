interface TextSegment {
  text: string;
  bold?: boolean;
  italic?: boolean;
}

interface ParagraphBlockProps {
  content: TextSegment[];
}

export const ParagraphBlock = ({ content }: ParagraphBlockProps) => {
  return (
    <p className="leading-[1.7] mb-4 text-[1.0625rem] text-foreground/90">
      {content.map((segment, index) => {
        const className = [
          segment.bold && "font-semibold text-foreground",
          segment.italic && "italic",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <span key={index} className={className || undefined}>
            {segment.text}
          </span>
        );
      })}
    </p>
  );
}
