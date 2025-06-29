export enum CategoryId {
    ACCESSIBILITY = 'accessibility',
    DOM = 'dom',
    ELM = 'elm',
    FRP = 'frp',
    GENERAL = 'general',
    JAVASCRIPT = 'javascript',
    REACT = 'react',
    SWE = 'swe',
    TESTING = 'testing',
    TOOLS = 'tools',
}

export interface Post {
    id: string;
    title: string;
    spoiler: string;
    date: string;
    categoryId: CategoryId;
    slug: string;
}
