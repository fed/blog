import { MarkdownRemark } from '../graphql-types';

export enum Category {
    BACONJS = 'baconjs',
    RXJS = 'rxjs',
    JAVASCRIPT = 'javascript',
    REACT = 'react',
    TESTING = 'testing',
    ACCESSIBILITY = 'accessibility',
    BROWSERS = 'browsers',
    GENERAL = 'general',
}

// export type Post = MarkdownRemark;

export interface Post {
    id: string;
    html: string;
    timeToRead: number;
    frontmatter: {
        title: string;
        date: string;
        spoiler: string;
        category: Category;
    };
    fields: {
        slug: string;
    };
}
