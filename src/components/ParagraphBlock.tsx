import React from 'react'

type Props = {
    content:{
    text: string;
    bold?: boolean | undefined;
    italic?: boolean | undefined;
}[];
}

const ParagraphBlock = (props: Props) => {
  return (
    <div className="paragraph-block">
      {props.content.map((item, index) => (
        <span key={index} className={item.bold ? "bold" : ""}>
          {item.text}
        </span>
      ))}
    </div>
  )
}
export default ParagraphBlock