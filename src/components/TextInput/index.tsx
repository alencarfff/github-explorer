import React from 'react';
import { TextInputSC } from './style';

interface TextInputProps {
    value: string, 
    onChange: Function, 
    placeholder: string,
    hasError: boolean
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder, hasError }) => (
    <TextInputSC
        hasError={hasError}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}>    
    </TextInputSC>
);

export default TextInput;