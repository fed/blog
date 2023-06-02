import React from 'react';

import { skipLinkStyle, contentStyle } from './layout.css';
import { Navigation } from './navigation';

export const Layout: React.FC = ({ children }) => (
    <>
        <a className={skipLinkStyle} href="#main" data-testid="layout-skip-link">
            Skip to main content
        </a>
        <Navigation />
        <main className={contentStyle} id="main" data-testid="layout-content">
            {children}
        </main>
    </>
);
