export interface ApiResponse {
    name: string;
    id: number;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    }
}
