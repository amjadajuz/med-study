import React from 'react'

type Props = {
    columns: {
    title: string;
    items: {
        label: string;
        value: string;
    }[];
}[]
}

const ComparisonBlock = ({ columns }: Props) => {
  console.log(columns)
  return (
     <div className="my-8 grid gap-4 md:grid-cols-2">
      {columns.map((column, colIndex) => (
        <div
          key={colIndex}
          className={`rounded-lg border border-border border-t-4 ${colIndex==1?"border-t-tertiary ":"border-t-primary"} bg-card shadow-sm transition-all hover:shadow-md`}
        >
          <h3 className={`p-6 mb-5 text-[1.125rem] font-semibold text-foreground border-b border-border pb-3 ${colIndex==1?"border-t-tertiary bg-tertiary/10":"border-t-primary bg-primary/10"}`}>
            {column.title}
          </h3>
          <div className="space-y-3 px-6 pb-6">
            {column.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex flex-col gap-1">
                <dt className={`text-[0.8125rem] font-medium uppercase tracking-wide ${colIndex==1?"text-tertiary/80":"text-primary/80"}`}>
                  {item.label}
                </dt>
                <dd className="text-[0.9375rem] text-foreground/90 leading-relaxed">
                  {item.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
export default ComparisonBlock