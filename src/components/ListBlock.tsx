import { ArrowBigRight } from "lucide-react";

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
        className={`relative mb-6 leading-[1.7] text-foreground/90 last:mb-0${ordered ? " pl-10" : ""}`}
        
      >
        {ordered ? (
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
             <span className="block pt-1">{item}</span>
          </>
        ):(
          <div className="flex">
          <ArrowBigRight color="var(--color-primary)"/>
          <span className="ml-2">{item}</span>
          </div>
        )}
        
       
      </li>
    ));
  };

  return (
    <ListTag 
      className={`my-6 transition-colors duration-500 border border-border rounded-lg p-4 bg-card/50 ${
        ordered ? "list-none" : "list-none "
      }`}
    >
      {renderItems(items)}
    </ListTag>
  );
};