import React, { FC } from "react";
import { cn } from "../lib/utils";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean
}
 
const Button: FC<ButtonProps> = ({className, disabled, ...props}) => {
  
    return(
        <button 
            className={cn("p-3 border cursor-pointer", className)} 
            disabled={disabled} 
            {...props}>
            hello
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