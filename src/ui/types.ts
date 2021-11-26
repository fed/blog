export enum CategoryId {
    BACONJS = 'baconjs',
    RXJS = 'rxjs',
    JAVASCRIPT = 'javascript',
    REACT = 'react',
    TESTING = 'testing',
    ACCESSIBILITY = 'accessibility',
    DOM = 'dom',
    GENERAL = 'general',
    CSS = 'css',
}

export interface Post {
    id: string;
    title: string;
    spoiler: string;
    date: string;
    timeToRead: number;
    categoryId: CategoryId;
    isExternal: boolean;
    url?: string;
    slug?: string;
}
