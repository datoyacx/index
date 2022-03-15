import type { BlogDataAuthor } from './blogDataAuthor';

export interface BlogData {
    id: string;
    title: string;
    excerpt: string;
    status: string;
    content?: string;
    update_at: number;
    create_at: number;
    author: BlogDataAuthor;
}