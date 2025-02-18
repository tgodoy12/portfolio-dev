import React, { FC } from "react";
import { cn } from "../lib/utils";

type TVariant = "mint" | "melon" 

const variants: Record<TVariant, string> = {
    mint: "bg-mint hover:contrast-125",
    melon: "bg-melon hover:contrast-125"
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant: TVariant
    disabled?: boolean
}
 
const Button: FC<ButtonProps> = ({children, className, variant="mint", disabled, ...props}) => {
  
    return(
        <button 
            className={cn("px-5 py-2 border border-b-3 border-r-3 cursor-pointer rounded-lg", className, variants[variant])} 
            disabled={disabled} 
            {...props}>
            {children}
        </button>
    )
}

export default Button;

// type ButtonProps = {
//   text: string;
//   variant?: "mint" | "melon" | "jasmine";
// };

// export default function Button({ text, variant = "mint" }: ButtonProps) {
//   const styles: Record<string, string> = {
//     mint: "bg-mint hover:bg-gray-600 text-black border-mint",
//     jasmine: "bg-jasmine hover:bg-gray-600 text-black border-jasmine",
//   };

//   return (
//     <button
//       className={`py-3 px-5 border-2 rounded-md cursor-pointer font-semibold transition-colors duration-300 ${styles[variant]}`}
//     >
//       {text}
//     </button>
//   );
// }




// los hover no están funcionando. Buscar nueva forma de crear
// un componente boton jsx. Sino, mirgrar a tsx.
// const styles = {
//   mint: "bg-mint hover:bg-mint-darker",
//   melon: "bg-melon hover:bg-melon-darker",
//   jasmine: "bg-jasmine hover:bg-jasmine-darker"
// };