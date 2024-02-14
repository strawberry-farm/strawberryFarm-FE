export interface InputProps {
    placeholder: string;
    type: string;
    defaultValue?: string;
    setValue?: React.Dispatch<React.SetStateAction<any>>;
    disabled?: boolean;
}
