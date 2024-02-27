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
    sido: {
        sidoName: string;
        sigungu: {
            sigunguName: string;
            bcode: number;
        }[];
    }[];
}
export interface LocationData {
    setLocation: React.Dispatch<React.SetStateAction<any>> | any;
}

export interface LocalTimeProps {
    day: string;
    time: string;
}
