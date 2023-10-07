import { PropsWithChildren } from "react";

const Card = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="w-full h-full overflow-visible">
        <div className="grid w-4/5 h-full gap-4 px-2 py-4 mx-auto rounded-2xl bg-clr-contrast sm:flex">
          {children}
        </div>
      </div>
    </>
  );
};

export default Card;
