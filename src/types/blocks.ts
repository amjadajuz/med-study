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
  | {
      type: "callout";
      style: "info" | "warning" | "tip" | "note";
      title: string;
      text: string;
    }
  | {
      type: "list";
      ordered: boolean;
      items: string[];
    }
  | {
      type: "mnemonic";
      title: string;
      letters: Array<{ letter: string; expansion: string }>;
    }
  | { type: "flashcard"; front: string; back: string; tags: string[] };
