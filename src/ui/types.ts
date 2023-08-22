export enum CategoryId {
    GENERAL = 'general',
    DOM = 'dom',
    JAVASCRIPT = 'javascript',
    TESTING = 'testing',
    ACCESSIBILITY = 'accessibility',
    DECLARATIVE = 'declarative',
    FRP = 'frp',
}

export interface Post {
    id: string;
    title: string;
    spoiler: string;
    date: string;
    categoryId: CategoryId;
    slug: string;
}
