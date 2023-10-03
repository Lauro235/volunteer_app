interface IButton {
  text: string;
  onClickHandler?: (...args: unknown[]) => void;
  args?: Array<unknown> | unknown;
}

const Button = ({text, onClickHandler, args}: IButton) => {
  return (
    <button onClick={() => onClickHandler !== undefined && onClickHandler(args)} type="button" className="text-xl font-bold text-white drop-shadow-app-btn p4 bg-login">{text}</button>
  )
}

export default Button