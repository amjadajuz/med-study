import { JSX } from 'react'

interface HeadingBlockProps {
  level: 1 | 2 | 3 | 4;
  text: string;
}

const HeadingBlock = ({ level, text }: HeadingBlockProps) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const classes = {
    1: "text-[2.5rem] leading-[1.2] font-semibold tracking-tight mb-6 mt-12 first:mt-0",
    2: "text-[2rem] leading-[1.3] font-semibold tracking-tight mb-5 mt-10",
    3: "text-[1.5rem] leading-[1.4] font-semibold mb-4 mt-8",
    4: "text-[1.25rem] leading-[1.5] font-semibold mb-3 mt-6",
  };

  return <HeadingTag className={classes[level as keyof typeof classes] || classes[1]}>{text}</HeadingTag>;
}
export default HeadingBlock