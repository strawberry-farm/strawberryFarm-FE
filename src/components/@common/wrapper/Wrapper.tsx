import { WrapperProps } from './Wrapper.interface';

export default function Wrapper({ children }: WrapperProps) {
    return <div className="common-wrapper">{children}</div>;
}
