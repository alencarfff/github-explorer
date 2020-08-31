import styled from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
    category?: "primary" | "secondary",
}
const COLORS: any = {
    primary: "#04d361",
    secondary: "#4304d3"
}
export const ButtonSC = styled.button<ButtonProps>`
    width: 210px;
    height: 70px;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    background: ${(props) => COLORS[props.category || "primary"]};

    &:hover {
        background: ${(props) => shade(0.2, COLORS[props.category || "primary"])}
    }
`;