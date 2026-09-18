export interface Todo {
    id: number;
    text: string;
    done: boolean;
}

export enum FilterOption {
    ALL,
    OPEN,
    DONE
};
