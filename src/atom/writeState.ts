import { atom } from 'recoil';
import { WriteData } from './atom.interface';

export const writeState = atom<WriteData>({
    key: 'writeState',
    default: {
        title: '',
        person: ',',
        field: {
            id: '',
            fieldName: '',
        },
        detail: '',
        local: {
            bcode: '',
            addr: '',
            addrDitle: '',
            x: '',
            y: '',
        },
        application: {
            applicationText: '',
            introductionValue: '',
            proficiencyValue: '',
            freeTalk: '',
        },
        imge: '' || {},
        tag: [],
        date: {
            day: '',
            time: '',
        },
    },
});
