import { useRecoilState } from 'recoil';
import { componentModalState } from '../atom/modalState';

export const useComponentModal = () => {
    const [modalDataState, setModalDataState] =
        useRecoilState(componentModalState);

    const closeComponentModal = (event: MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            setModalDataState(() => {
                return { isOpen: false, content: undefined };
            });
        }
    };

    const openComponentModal = (content: undefined | JSX.Element) => {
        setModalDataState(() => {
            return { isOpen: true, content };
        });
    };

    return { modalDataState, openComponentModal, closeComponentModal };
};
