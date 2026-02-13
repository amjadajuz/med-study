import React from 'react'

type Props = {
    ordered: boolean;
    items: {
    text: string;
    nested?: {
        text: string;
    }[] | undefined;
}[]
}

const ListBlock = (props: Props) => {
  return (
    <div>ListBlock</div>
  )
}
export default ListBlock