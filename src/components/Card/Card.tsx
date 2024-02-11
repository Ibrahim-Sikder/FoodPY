import { ReactNode } from "react";
import { cn } from "../../utils/utils";

type TCardProps = {
    className: string,
    children:ReactNode
}
const Card = ({children, className}:TCardProps) => {
    return (
        <div className={cn("h-[300px]  rounded-md text-sm", className)}>
            {children}
        </div>
    );
};

export default Card;