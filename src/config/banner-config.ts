import { BannerConfig } from '../services/types';

// Default configuration that will be used if API fails
export const defaultBannerConfig: BannerConfig = {
    isEnabled: true,
    message: "This site is under construction. To know more about me checkout",
    link: {
        url: "https://www.linkedin.com/in/benjaminmishra/",
        text: "LinkedIn"
    }
};
