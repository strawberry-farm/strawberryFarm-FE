export interface PaginationProps {
    total: number;
    limit: number;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}
