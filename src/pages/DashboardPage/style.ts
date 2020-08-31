import styled, { css } from 'styled-components';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
`;

export const Repositories = styled.div`
    margin-top:80px;
    max-width:700px;
`;

export const Form = styled.form`
    margin-top: 45px;
    max-width: 700px;
    display: flex;
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;    
`;

