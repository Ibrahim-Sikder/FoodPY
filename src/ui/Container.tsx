import { ReactNode } from "react";
import { cn } from "../utils/utils";

type TContainerProps = {
    children: ReactNode,
    className: string,
}
const Container = ({children, className}:TContainerProps) => {
    return (
        <div className={cn("px-[20px] w-full max-w-[1200px] mx-auto", className)}>
            {children}
        </div>
    );
};

export default Container;