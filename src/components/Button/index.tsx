import React from 'react';
import { ButtonSC } from './style';

interface ButtonsProps {
    type: "button" | "submit" | "reset",
    category?: "primary" | "secondary",
    disabled?: boolean,
}

const Button: React.FC<ButtonsProps> = ({ type, category, disabled, children }) => (
    <ButtonSC category={category} 
        type={type} 
        disabled={disabled}>
        {children}
    </ButtonSC>
)
Button.defaultProps = {
    type: "button",
    disabled: false,
    category: "primary"
}

export default Button;