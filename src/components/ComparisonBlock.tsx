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
  return (
     <div className="my-8 grid gap-4 md:grid-cols-2">
      {columns.map((column, colIndex) => (
        <div
          key={colIndex}
          className="rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
        >
          <h3 className="mb-5 text-[1.125rem] font-semibold text-foreground border-b border-border pb-3">
            {column.title}
          </h3>
          <div className="space-y-3">
            {column.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex flex-col gap-1">
                <dt className="text-[0.8125rem] font-medium text-muted-foreground uppercase tracking-wide">
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