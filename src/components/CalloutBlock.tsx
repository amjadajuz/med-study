import { calloutStyles } from "../const/styleVariants";

interface CalloutBlockProps {
  type: "warning" | "tip" | "info" | "note";
  text: string;
}

const CalloutBlock = ({ type, text }: CalloutBlockProps) => {
  const style = calloutStyles[type];
  return (
     <div
      className={`my-6 rounded-lg border ${style.border} ${style.bg} p-5 flex gap-4`}
    >
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-md ${style.iconBg} flex items-center justify-center text-lg`}
      >
        {style.icon}
      </div>
      <div className="flex-1 text-[0.9375rem] leading-[1.7] text-foreground">
        {text}
      </div>
    </div>
  )
}

export default CalloutBlock