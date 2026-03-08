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
        <div className="relative isolate flex w-full items-center gap-x-6 overflow-hidden border-b border-slate-200/70 bg-slate-50/90 px-4 py-1 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200">
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
                <p className="flex items-center gap-3 leading-6">
                    <strong className="font-semibold">This site is under construction. To know more about me checkout</strong>
                    <a
                        href="https://www.linkedin.com/in/benjaminmishra/"
                        className="flex-none rounded-full bg-slate-900 px-3 py-1 font-semibold text-white shadow-sm transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white"
                    >
                        <img src={linkedin} alt="linked in logo" className="h-4 w-4 filter dark:invert-0" />
                    </a>

                </p>
            </div>
        </div>
    )
}
