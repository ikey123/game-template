export interface FrontMatter {
    title?: string;
    description?: string;
    game?: string;
    cover?: string;
    date?: string;
    category?: string;
    tags?: string[];
    author?: string;
    categories?: string[];
    layout?: string;
    slug?: string;
    locale?: string;
    breadcrumb?: boolean;
}

export interface PageData {
    frontMatter: FrontMatter;
    filePath: string;
    name: string;
    route: string;
    locale?: string;
} 