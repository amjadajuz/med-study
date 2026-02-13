import CalloutBlock  from "./CalloutBlock.tsx";
import CodeBlock  from "./CodeBlock.tsx";
import  ComparisonBlock  from "./ComparisonBlock.tsx";
import  DividerBlock  from "./DividerBlock.tsx";
import  HeadingBlock  from "./HeadingBlock.tsx";
import  ImageBlock  from "./ImageBlock.tsx";
import  ListBlock  from "./ListBlock.tsx";
import  ParagraphBlock  from "./ParagraphBlock.tsx";
import  QuizBlock  from "./QuizBlock.tsx";
import  TableBlock  from "./TableBlock.tsx";

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
  | { type: "callout"; calloutType: "info" | "warning" | "tip" | "note"; content: string }
  | {
      type: "list";
      ordered: boolean;
      items: Array<{ text: string; nested?: Array<{ text: string }> }>;
    }
  | {
      type: "table";
      headers: string[];
      rows: Array<{ cells: string[] }>;
    }
  | { type: "code"; language?: string; code: string }
  | {
      type: "quiz";
      question: string;
      options: Array<{
        text: string;
        correct: boolean;
        explanation?: string;
      }>;
    }
  | { type: "divider" }
  | { type: "image"; src: string; alt: string; caption?: string };

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
      return <CalloutBlock type={block.calloutType} content={block.content} />;
    case "list":
      return <ListBlock ordered={block.ordered} items={block.items} />;
    case "table":
      return <TableBlock headers={block.headers} rows={block.rows} />;
    case "code":
      return <CodeBlock language={block.language} code={block.code} />;
    case "quiz":
      return <QuizBlock question={block.question} options={block.options} />;
    case "divider":
      return <DividerBlock />;
    case "image":
      return <ImageBlock src={block.src} alt={block.alt} caption={block.caption} />;
    default:
      return null;
  }
}