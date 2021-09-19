type ContentStatus = 'public' | 'private' | 'profile' | 'unlist';
type ContentType = 'kami';

export interface BlogDataContent {
    code: string;
    description: string;
    status: ContentStatus;
    title: string;
    type: ContentType;
    main: string;
}