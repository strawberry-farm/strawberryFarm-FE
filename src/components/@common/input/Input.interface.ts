export interface InputProps {
    placeholder: string;
    type: string;
    defaultValue?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
    disabled?: boolean;
}
