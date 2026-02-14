type ListItem = string;

interface ListBlockProps {
  ordered: boolean;
  items: ListItem[];
}

export const ListBlock = ({ ordered, items }: ListBlockProps) => {
  const ListTag = ordered ? "ol" : "ul";
  
  const renderItems = (listItems: ListItem[], depth = 0) => {
    return listItems.map((item, index) => (
      <li key={index} className="mb-2 leading-[1.7] text-foreground/90">
        <span>{item}</span>
      </li>
    ));
  };

  return (
    <ListTag className={`my-4 ml-6 space-y-2 text-[0.9375rem] ${ordered ? "list-decimal" : "list-disc"}`}>
      {renderItems(items)}
    </ListTag>
  );
}
