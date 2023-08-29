export interface InputProps {
    placeholder: string;
    type: string;
    setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
    disabled: boolean;
}
