import { ButtonHTMLAttributes } from 'react';
//possibilita através do ctrl+space mostrar opções para serem usadas no button
import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
    return (
        <button
            className={`button ${isOutlined ? 'outlined' : ''}`}
            {...props} /> //spread operator - sintaxe de espalhamento
    )
}

