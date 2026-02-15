import { colorMap } from "../const/styleVariants";

interface ComparisonBlockProps {
  columns: Array<{
    title: string;
    items: Array<{
      label: string;
      value: string;
    }>;
  }>;
}

const ComparisonBlock = ({ columns }: ComparisonBlockProps) => {
  const getColorByIndex = (index: number) => {
    const colorKeys = Object.keys(colorMap) as Array<keyof typeof colorMap>;
    return colorMap[colorKeys[index % colorKeys.length]];
  };

  return (
    <div className="my-8 grid gap-4 md:grid-cols-2">
      {columns.map((column, colIndex) => {
        const color = getColorByIndex(colIndex);
        return (
          <div
            key={colIndex}
            className={`rounded-lg border border-border border-t-4 ${color.border} bg-card shadow-sm transition-all hover:shadow-md`}
          >
            <h3 className={`p-6 mb-5 text-[1.125rem] font-semibold text-foreground border-b border-border pb-3 ${color.bg}`}>
              {column.title}
            </h3>
            <div className="space-y-3 px-6 pb-6">
              {column.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex flex-col gap-1">
                  <dt className={`text-[0.8125rem] font-medium uppercase tracking-wide ${color.textOpacity}`}>
                    {item.label}
                  </dt>
                  <dd className="text-[0.9375rem] text-foreground/90 leading-relaxed">
                    {item.value}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ComparisonBlock