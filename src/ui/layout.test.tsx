import { render, screen } from '@testing-library/react';
import React from 'react';

import { Layout } from './layout';

describe('Layout', () => {
    describe('Skip link', () => {
        it('renders the skip link', () => {
            render(
                <Layout>
                    <p data-testid="test-content">Rawr</p>
                </Layout>,
            );

            expect(screen.getByTestId('layout-skip-link-container')).toBeInTheDocument();
            expect(screen.getByTestId('layout-skip-link')).toBeInTheDocument();
        });

        it('assigns the right id to the main content so that the skip link works', () => {
            render(
                <Layout>
                    <p>Rawr</p>
                </Layout>,
            );

            expect(screen.getByTestId('layout-skip-link')).toHaveAttribute('href', '#main');
            expect(screen.getByTestId('layout-content')).toHaveAttribute('id', 'main');
        });
    });

    describe('Navigation', () => {
        it('renders an avatar and the site name linking to the homepage', () => {
            render(
                <Layout>
                    <p>Rawr</p>
                </Layout>,
            );

            const logoLink = screen.getByTestId('navigation-logo');

            expect(logoLink).toHaveAttribute('href', '/');
            expect(screen.getByTestId('navigation-logo-title')).toHaveTextContent('F. Knüssel: Frontend Developer');

            const logoImage = screen.getByTestId('navigation-logo-image');

            expect(logoImage).toHaveAttribute('src', 'test-file-stub');
            expect(logoImage).toHaveAttribute('alt', '');
        });

        it('renders the right navigation items', () => {
            render(
                <Layout>
                    <p>Rawr</p>
                </Layout>,
            );

            const navigationLinks = screen.getAllByTestId('layout-navigation-link');

            expect(navigationLinks).toHaveLength(7);

            expect(navigationLinks[0]).toHaveAttribute('href', '/about');
            expect(navigationLinks[0]).toHaveTextContent('About');

            expect(navigationLinks[1]).toHaveAttribute('href', '/');
            expect(navigationLinks[1]).toHaveTextContent('Blog');

            expect(navigationLinks[2]).toHaveAttribute('href', '/uses');
            expect(navigationLinks[2]).toHaveTextContent('Uses');

            expect(navigationLinks[3]).toHaveAttribute('href', '/now');
            expect(navigationLinks[3]).toHaveTextContent('Now');

            expect(navigationLinks[4]).toHaveAttribute('href', '/colophon');
            expect(navigationLinks[4]).toHaveTextContent('Colophon');

            expect(navigationLinks[5]).toHaveAttribute('href', 'https://github.com/fed');
            expect(navigationLinks[5]).toHaveTextContent('GitHub');

            expect(navigationLinks[6]).toHaveAttribute('href', '/rss.xml');
            expect(navigationLinks[6]).toHaveTextContent('RSS');
        });
    });

    it('renders any content it gets passed in', () => {
        render(
            <Layout>
                <p data-testid="test-content">Rawr</p>
            </Layout>,
        );

        const content = screen.getByTestId('layout-content');
        expect(screen.getByTestId('test-content')).toBeInTheDocument();
        expect(content).toHaveTextContent('Rawr');
    });
});
