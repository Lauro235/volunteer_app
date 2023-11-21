import { PropsWithChildren } from "react";
import { ClassNameValue } from "tailwind-merge";
import { cn } from "../../utils/conditions";

interface ICardProps {
  className?: {
    outer?: ClassNameValue,
    inner?: ClassNameValue
  };
}

const Card = ({
  children,
  className: classes,
}: PropsWithChildren & ICardProps) => {
  return (
    <>
      <div
        className={cn(
          "w-full h-full overflow-visible",
          classes?.outer
        )}
      >
        <div
          className={cn(
            "grid md:block w-4/5 h-full gap-4 px-2 py-4 mx-auto rounded-2xl bg-clr-contrast sm:flex",
            classes?.inner
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Card;
