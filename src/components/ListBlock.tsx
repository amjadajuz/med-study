type ListItem = string;

interface ListBlockProps {
  ordered: boolean;
  items: ListItem[];
}

export const ListBlock = ({ ordered, items }: ListBlockProps) => {
  const ListTag = ordered ? "ol" : "ul";

  const renderItems = (listItems: ListItem[]) => {
    return listItems.map((item, index) => (
      <li 
        key={index} 
        className={`relative mb-6 pl-10 leading-[1.7] text-foreground/90 last:mb-0`}
        
      >
        {ordered && (
          <>
        
            {index !== listItems.length - 1 && (
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
          </>
        )}
        
        <span className="block pt-1">{item}</span>
      </li>
    ));
  };

  return (
    <ListTag 
      className={`my-6 transition-colors duration-500 ${
        ordered ? "list-none" : "ml-6 list-disc space-y-2 marker:text-primary"
      }`}
    >
      {renderItems(items)}
    </ListTag>
  );
};