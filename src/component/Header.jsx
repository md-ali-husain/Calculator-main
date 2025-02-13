import React from 'react';
import ThemeSwitcher from '../component/ThemeSwitcher';

const Header = () => {
    return (
        <div className="flex justify-between items-center font-bold mb-7">
            <h1 className="text-skin-base text-title transition-colors">calc</h1>
            <div className="flex items-center gap-4">
                <p className="text-skin-base text-theme transition-colors">THEME</p>
                <ThemeSwitcher />
            </div>
        </div>
    );
}

export default Header;