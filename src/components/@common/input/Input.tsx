import { InputProps } from './Input.interface';

export default function Input({ placeholder, type, setValue }: InputProps) {
    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className="common-input-wrapper">
            <input
                className="common-input"
                type={type}
                placeholder={placeholder}
                onChange={onChangeValue}
            />
        </div>
    );
}
