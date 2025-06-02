export interface BannerConfig {
    isEnabled: boolean;
    message: string;
    link?: {
        url: string;
        text: string;
    };
}

export interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}
