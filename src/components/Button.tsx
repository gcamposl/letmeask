import { ButtonHTMLAttributes } from 'react';
//possibilita através do ctrl+space mostrar opções para serem usadas no button
import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
    //let -> let it change (Deixe me mudar)
    //const não pode ser alterada
    //let counter = 0;
    return (
        <button className="button" {...props} /> //spread operator - sintaxe de espalhamento
    )
}

