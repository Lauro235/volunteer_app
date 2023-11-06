import { PropsWithChildren } from "react";
import { ClassNameValue } from "tailwind-merge";
import { cn } from "../../utils/conditions";

interface ICardProps {
  className?: ClassNameValue;
}

const Card = ({
  children,
  className: classes,
}: PropsWithChildren & ICardProps) => {
  return (
    <>
      <div className={cn("w-full h-full overflow-visible", classes)}>
        <div className="grid w-4/5 h-full gap-4 px-2 py-4 mx-auto rounded-2xl bg-clr-contrast sm:flex">
          {children}
        </div>
      </div>
    </>
  );
};

export default Card;
