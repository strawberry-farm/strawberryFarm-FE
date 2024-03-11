import { atom } from 'recoil';

export const mainState = atom({
    key: 'mainState',
    default: [],
});
export const pageNumberState = atom({
    key: 'pageNumberState',
    default: 1,
});
export const totalPageState = atom({
    key: 'totalPageState',
    default: 0,
});
