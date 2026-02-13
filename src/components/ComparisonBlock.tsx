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

const ComparisonBlock = (props: Props) => {
  return (
    <div>ComparisonBlock</div>
  )
}
export default ComparisonBlock