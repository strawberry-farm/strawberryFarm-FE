import { ButtonProps } from './Button.interface';

export default function Button({ content }: ButtonProps) {
    return (
        <button type="button" className="common-button">
            {content}
        </button>
    );
}
