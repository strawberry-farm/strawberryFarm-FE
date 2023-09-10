import { atom } from 'recoil';
import { dropDayAndTimeType } from './atom.interface';

export const dropRogionState = atom<string>({
    key: 'dropRogionState',
    default: '',
});

export const dropDayAndTimeState = atom<dropDayAndTimeType>({
    key: 'dropDayAndTimeState',
    default: {
        day: '',
        time: '',
    },
});
