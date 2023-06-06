export enum CategoryId {
    GENERAL = 'general',
    DOM = 'dom',
    JAVASCRIPT = 'javascript',
    TESTING = 'testing',
    ACCESSIBILITY = 'accessibility',
    FRONTEND = 'frontend',
    FRP = 'frp',
}

export interface Post {
    id: string;
    title: string;
    spoiler: string;
    date: string;
    categoryId: CategoryId;
    isExternal: boolean;
    url?: string;
    slug?: string;
}
