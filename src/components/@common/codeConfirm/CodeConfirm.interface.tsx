export interface CodeConfirmProps {
    success: string;
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    timer: number;
    setTimer: React.Dispatch<React.SetStateAction<number>>;
}
