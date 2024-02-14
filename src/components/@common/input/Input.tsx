import { InputProps } from './Input.interface';

export default function Input({
    placeholder,
    type,
    defaultValue,
    setValue,
    disabled,
}: InputProps) {
    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (setValue) setValue(e.target.value);
    };
    return (
        <div className="common-input-wrapper">
            <input
                className="common-input"
                type={type}
                placeholder={placeholder}
                onChange={onChangeValue}
                disabled={disabled}
                value={defaultValue}
            />
        </div>
    );
}
