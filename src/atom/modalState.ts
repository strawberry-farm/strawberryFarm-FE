import { atom } from 'recoil';
import { modalStateType } from './atom.interface';

export const modalState = atom<modalStateType>({
    key: 'modalState',
    default: {
        modalOpen: false,
        content: '',
        confirm: '확인',
        url: '',
    },
});
