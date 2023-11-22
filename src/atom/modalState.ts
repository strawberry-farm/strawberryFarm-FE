import { atom } from 'recoil';
import { ComponentModalStateType, modalStateType } from './atom.interface';

export const modalState = atom<modalStateType>({
    key: 'modalState',
    default: {
        modalOpen: false,
        content: '',
        confirm: '확인',
        url: '',
    },
});

export const componentModalState = atom<ComponentModalStateType>({
    key: 'componentModalState',
    default: {
        isOpen: false,
		content: undefined,
    }
})