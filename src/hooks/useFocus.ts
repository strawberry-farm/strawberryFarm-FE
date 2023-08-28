import { useRef, useState, useLayoutEffect } from 'react';
const useFocus = (defaultFocused = false) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(defaultFocused); // input focus 감지하는 state

    useLayoutEffect(() => {
        if (!ref.current) {
            return;
        }
        const onFocus = () => setIsFocused(true);
        const onBlur = () => setIsFocused(false);
        if (isFocused) {
            ref.current.focus();
        }

        ref.current.addEventListener('focus', onFocus);
        ref.current.addEventListener('blur', onBlur);

        return () => {
            ref.current!.removeEventListener('focus', onFocus);
            ref.current!.removeEventListener('blur', onBlur);
        };
    }, [isFocused]);

    return { ref, isFocused, setIsFocused };
};

export default useFocus;
