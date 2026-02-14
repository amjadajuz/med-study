
type Props = {
    type: "warning" | "tip" | "info" | "note";
    content:string
}

const CalloutBlock = ({ type, content }: Props) => {
  const styles = {
    info: {
      bg: "bg-blue-50 dark:bg-blue-950/30",
      border: "border-blue-200 dark:border-blue-800",
      icon: "ℹ️",
      iconBg: "bg-blue-100 dark:bg-blue-900/50",
    },
    warning: {
      bg: "bg-amber-50 dark:bg-amber-950/30",
      border: "border-amber-200 dark:border-amber-800",
      icon: "⚠️",
      iconBg: "bg-amber-100 dark:bg-amber-900/50",
    },
    tip: {
      bg: "bg-emerald-50 dark:bg-emerald-950/30",
      border: "border-emerald-200 dark:border-emerald-800",
      icon: "💡",
      iconBg: "bg-emerald-100 dark:bg-emerald-900/50",
    },
    note: {
      bg: "bg-purple-50 dark:bg-purple-950/30",
      border: "border-purple-200 dark:border-purple-800",
      icon: "📝",
      iconBg: "bg-purple-100 dark:bg-purple-900/50",
    },
  };
  const style = styles[type];
  console.log(type, style);
  return (
     <div
      className={`my-6 rounded-lg border ${style.border} ${style.bg} p-5 flex gap-4`}
    >
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-md ${style.iconBg} flex items-center justify-center text-lg`}
      >
        {style.icon}
      </div>
      <div className="flex-1 text-[0.9375rem] leading-[1.7] text-black">
        {content}
      </div>
    </div>
  )
}

export default CalloutBlock