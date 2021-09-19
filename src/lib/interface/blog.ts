import type { BlogData } from './blogData';

export interface Blog {
    rows: Array<BlogData>,
    total_all_rows: number;
    total_selected_rows: number;
}