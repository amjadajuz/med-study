
type Props = {
    type: "warning" | "tip" | "info" | "note";
    content:string
}

const CalloutBlock = (props: Props) => {
  return (
    <div>CalloutBlock</div>
  )
}

export default CalloutBlock