import CalloutBlock from "./CalloutBlock.tsx";
import ComparisonBlock from "./ComparisonBlock.tsx";
import FlashCard from "./FlashCard.tsx";
import HeadingBlock from "./HeadingBlock.tsx";
import { ListBlock } from "./ListBlock.tsx";
import { ParagraphBlock } from "./ParagraphBlock.tsx";

export type Block =
  | { type: "heading"; level: 1 | 2 | 3 | 4; text: string }
  | {
      type: "paragraph";
      content: Array<{ text: string; bold?: boolean; italic?: boolean }>;
    }
  | {
      type: "comparison";
      columns: Array<{
        title: string;
        items: Array<{ label: string; value: string }>;
      }>;
    }
  | { type: "callout"; style: "info" | "warning" | "tip" | "note"; content: string }
  | {
      type: "list";
      ordered: boolean;
      items: string[];
    }
  | { type: "mnemonic"; title: string; letters: Array<{ letter: string; expansion: string }> }
  | {type:"flashcard"; front:string; back:string; tags:string[] };

interface BlockRendererProps {
  block: Block;
}

export function BlockRenderer({ block }: BlockRendererProps) {
  switch (block.type) {
    case "heading":
      return <HeadingBlock level={block.level} text={block.text} />;
    case "paragraph":
      return <ParagraphBlock content={block.content} />;
    case "comparison":
      return <ComparisonBlock columns={block.columns} />;
    case "callout":
      return <CalloutBlock type={block.style} content={block.content} />;
    case "list":
      return <ListBlock ordered={block.ordered} items={block.items} />;
    case "flashcard":
      return <FlashCard front={block.front} back={block.back} tags={block.tags} />;
    default:
      return null;
  }
}