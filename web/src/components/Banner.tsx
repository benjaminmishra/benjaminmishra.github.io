import React, { useEffect, useState } from "react";
import linkedin from "../assets/linkedin.svg"
import { defaultBannerConfig } from "../config/banner-config";
import { getBannerConfig } from "../services/banner.service";
import { BannerConfig } from "../services/types";

export default function Banner() {
    const [bannerConfig, setBannerConfig] = useState<BannerConfig>(defaultBannerConfig);

    useEffect(() => {
        const fetchConfig = async () => {
            const config = await getBannerConfig();
            setBannerConfig(config);
        };
        fetchConfig();
    }, []);

    if (!bannerConfig.isEnabled) return null;

    return (
        <div className="narrow-banner relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 dark:bg-gray-800 px-4 py-0.5 w-full">
            <div
                className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                aria-hidden="true">
                <div
                    className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#0B5394] to-[#3D85C6] opacity-30"
                    style={{
                        clipPath:
                            'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                    }} />
            </div>
            <div
                className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                aria-hidden="true">
                <div
                    className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#0B5394] to-[#3D85C6] opacity-30"
                    style={{
                        clipPath:
                            'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                    }}
                />
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="flex text-sm leading-6">
                    <strong className="font-semibold">This site is under construction. To know more about me checkout</strong>
                    <a
                        href="https://www.linkedin.com/in/benjaminmishra/"
                        className="flex-none rounded-full bg-gray-900 dark:bg-gray-700 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 dark:hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                    >
                        <img src={linkedin} alt="linked in logo" className="filter dark:invert" />
                    </a>

                </p>
            </div>
        </div>
    )
}
