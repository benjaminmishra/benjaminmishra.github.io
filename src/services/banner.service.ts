import { BannerConfig } from './types';
import { defaultBannerConfig } from '../config/banner-config';

const BANNER_API_URL = import.meta.env.REACT_APP_API_URL ? `${import.meta.env.REACT_APP_API_URL}/banner` : '';

export const getBannerConfig = async (): Promise<BannerConfig> => {
    if (!BANNER_API_URL) {
        return defaultBannerConfig;
    }

    try {
        const response = await fetch(BANNER_API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch banner config');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching banner config:', error);
        return defaultBannerConfig;
    }
};

export const updateBannerConfig = async (config: BannerConfig): Promise<void> => {
    if (!BANNER_API_URL) {
        console.warn('API URL not configured, banner updates will not persist');
        return;
    }

    try {
        const response = await fetch(BANNER_API_URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(config),
        });
        
        if (!response.ok) {
            throw new Error('Failed to update banner config');
        }
    } catch (error) {
        console.error('Error updating banner config:', error);
        throw error;
    }
};
