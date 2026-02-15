import { ArrowBigRight } from "lucide-react";
import { useState } from "react";
import ShowMoreLessButton from "./ShowMoreLessButton";
import { UI } from "../const/config";

type ListItem = string;

interface ListBlockProps {
  ordered: boolean;
  items: ListItem[];
}

const renderListItem = (item: ListItem, index: number, ordered: boolean, itemsLength: number) => {
  return (
    <li
      key={index}
      className={`relative mb-6 leading-[1.7] text-foreground/90 last:mb-0${ordered ? " pl-10" : ""}`}
    >
      {ordered ? (
        <>
          {index !== itemsLength - 1 && (
            <span
              className="absolute left-[15px] top-[30px] h-full w-[2px] bg-primary/20"
              aria-hidden="true"
            />
          )}

          <span
            className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background text-xs font-bold text-primary shadow-sm"
          >
            {index + 1}
          </span>
          <span className="block pt-1">{item}</span>
        </>
      ) : (
        <div className="flex items-start">
          <ArrowBigRight size={24} color="var(--color-primary)" />
          <span className="ml-2">{item}</span>
        </div>
      )}
    </li>
  );
};

export const ListBlock = ({ ordered, items }: ListBlockProps) => {
  const [expanded, setExpanded] = useState(false);
  const ListTag = ordered ? "ol" : "ul";

  return (
    <ListTag
      className={`my-6 transition-colors duration-500 border border-border rounded-lg p-4 bg-card/50 ${
        ordered ? "list-none" : "list-none "
      }`}
    >
      {(expanded ? items : items.slice(0, UI.LIST_PREVIEW_COUNT)).map((item, index) =>
        renderListItem(item, index, ordered, expanded ? items.length : UI.LIST_PREVIEW_COUNT)
      )}

      {items.length > UI.LIST_PREVIEW_COUNT && (
        <li className="mt-2 flex items-center justify-center">
          <ShowMoreLessButton
            expanded={expanded}
            remaining={Math.max(0, items.length - UI.LIST_PREVIEW_COUNT)}
            onToggle={() => setExpanded((s) => !s)}
          />
        </li>
      )}
    </ListTag>
  );
};