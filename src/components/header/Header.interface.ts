export interface SearchIsProps {
    region: string;
    dayAndTime: string;
    localAndTitle: string;
}
export interface Situation {
    user: boolean;
    alarm: boolean;
    guest: boolean;
}
export interface RegionProps {
    sidoName: string;
    sigungu: {
        sigunguName: string;
        bCode: number;
    }[];
}
export interface LocalTimeProps {
    day: string;
    time: string;
}
