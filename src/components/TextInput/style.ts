import styled, { css } from 'styled-components';

interface FormProps {
    hasError: boolean;
}

export const TextInputSC = styled.input<FormProps>`
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid transparent;
    border-right: none;

    ${(props) => props.hasError && css`
        border-color: #c53030;
    `} 

    &::placeholder {
        color: #a8a8b3;
    }
`;