export interface modalStateType {
    modalOpen: boolean;
    content: string;
    confirm: string;
    url: string;
}
export interface dropDayAndTimeType {
    day: string;
    time: string;
}
export interface WriteData {
    title?: string;
    person?: string | number;
    field?: {
        id: number | string;
        fieldName: string;
    };
    detail?: string | number;
    local?: {
        bcode: string | number;
        addr: string;
        addrDitle: string | number;
        x: string | number;
        y: string | number;
    };
    application?: {
        applicationText: string | number;
        introductionValue: string | number;
        proficiencyValue: string | number;
        freeTalk: string | number;
    };
    imge?: string | object;
    tag?: string[];
    date?: {
        day: string;
        time: string;
    };
}
