import { WrapperProps } from './Wrapper.interface';

export default function CommonWrapper({ children }: WrapperProps) {
    return <div className="common-wrapper">{children}</div>;
}
