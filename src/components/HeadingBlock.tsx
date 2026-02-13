import React from 'react'

type Props = {
    level: number;
    text:string;
}

const HeadingBlock = (props: Props) => {
  return (
    <div className={`heading-${props.level}`}>{props.text}</div>
  )
}
export default HeadingBlock