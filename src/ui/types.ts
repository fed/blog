export enum CategoryId {
    ACCESSIBILITY = 'accessibility',
    DOM = 'web-platform',
    FRP = 'frp',
    REACT = 'react',
    ELM = 'elm',
    JAVASCRIPT = 'javascript',
    CSS = 'css',
    TESTING = 'testing',
    SWE = 'software-engineering',
    MODELLING = 'knowledge-modelling',
    TOOLS = 'tools',
    GENERAL = 'general',
}

export interface Post {
    id: string;
    title: string;
    spoiler: string;
    date: string;
    datetime: string;
    categoryId: CategoryId;
    slug: string;
}
