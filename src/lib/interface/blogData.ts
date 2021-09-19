import type { BlogDataContent } from "./blogDataContent";
import type { BlogDataUser } from './blogDataUser';

export interface BlogData {
    content: BlogDataContent;
    user: BlogDataUser;
}