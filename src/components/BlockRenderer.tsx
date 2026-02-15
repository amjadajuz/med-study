import CalloutBlock from "./CalloutBlock.tsx";
import ComparisonBlock from "./ComparisonBlock.tsx";
import FlashCard from "./FlashCard.tsx";
import HeadingBlock from "./HeadingBlock.tsx";
import { ListBlock } from "./ListBlock.tsx";
import { MnemonicBlock } from "./MnemonicBlock.tsx";
import { ParagraphBlock } from "./ParagraphBlock.tsx";
import type { Block } from "../types/blocks";

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
      return <CalloutBlock type={block.style} title={block.title} text={block.text} />;
    case "list":
      return <ListBlock ordered={block.ordered} items={block.items} />;
    case "flashcard":
      return <FlashCard front={block.front} back={block.back} tags={block.tags} />;
    case "mnemonic":
      return <MnemonicBlock title={block.title} letters={block.letters} />;
    default:
      return null;
  }
}