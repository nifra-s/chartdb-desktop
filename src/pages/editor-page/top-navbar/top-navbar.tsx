import React, { useCallback } from 'react';
import ChartDBLogo from '@/assets/logo-light.png';
import ChartDBDarkLogo from '@/assets/logo-dark.png';
import { useTheme } from '@/hooks/use-theme';
import { DiagramName } from './diagram-name';
import { LastSaved } from './last-saved';
import { LanguageNav } from './language-nav/language-nav';
import { Menu } from './menu/menu';
import TitleBar from '@/components/title-bar/TitleBar';

export interface TopNavbarProps {}

export const TopNavbar: React.FC<TopNavbarProps> = () => {
    const { effectiveTheme } = useTheme();

    const renderStars = useCallback(() => {
        return (
            <iframe
                src={`https://ghbtns.com/github-btn.html?user=chartdb&repo=chartdb&type=star&size=large&text=false`}
                width="40"
                height="30"
                title="GitHub"
                className="interactive-element" // Adds clicking accessibility later
            ></iframe>
        );
    }, []);

    return (
        // 2. TAILWIND FIX: Added "drag" region directly to the main desktop header
        <nav className="webkit-drag flex select-none flex-col justify-between border-b px-3 md:h-12 md:flex-row md:items-center md:px-4">
            <div className="flex flex-1 flex-col justify-between gap-x-1 md:flex-row md:justify-normal">
                <div className="flex items-center justify-between pt-[8px] font-primary md:py-[10px]">
                    <a
                        href="https://chartdb.io"
                        className="interactive-element cursor-pointer"
                        rel="noreferrer"
                    >
                        <img
                            src={
                                effectiveTheme === 'light'
                                    ? ChartDBLogo
                                    : ChartDBDarkLogo
                            }
                            alt="chartDB"
                            className="h-4 max-w-fit"
                        />
                    </a>
                </div>
                {/* 3. MENUS NEED CLICK INTERACTION ACCESSIBILITY OVER WINDOW DRAG */}
                <div className="interactive-element flex items-center">
                    <Menu />
                </div>
            </div>

            <div className="interactive-element">
                <DiagramName />
            </div>

            {/* 4. LAYOUT FIX: Moved TitleBar inside the absolute far-right layout wrapper */}
            <div className="hidden h-full flex-1 items-center justify-end gap-3 sm:flex">
                <div className="interactive-element flex items-center gap-2">
                    <LastSaved />
                    {renderStars()}
                    <LanguageNav />
                </div>
                <TitleBar />
            </div>
        </nav>
    );
};
