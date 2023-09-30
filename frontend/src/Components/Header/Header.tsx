import { RxAvatar } from "react-icons/rx"

const MobileHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold text-col-primary">Volunteer App</h1>
      <RxAvatar className="text-6xl text-col-primary" />
    </div>
  )
}

export default MobileHeader