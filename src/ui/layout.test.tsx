import { shallow, mount } from 'enzyme';
import React from 'react';

import { Layout } from './layout';

describe('Layout', () => {
    describe('Skip link', () => {
        it('renders the skip link', () => {
            const wrapper = shallow(
                <Layout>
                    <p data-testid="test-content">Rawr</p>
                </Layout>,
            );

            expect(wrapper.find('[data-testid="layout-skip-link"]').exists()).toBe(true);
        });

        it('assigns the right id to the main content so that the skip link works', () => {
            const wrapper = shallow(
                <Layout>
                    <p data-testid="test-content">Rawr</p>
                </Layout>,
            );

            expect(wrapper.find('[data-testid="layout-skip-link"]').prop('href')).toBe('#main');
            expect(wrapper.find('[data-testid="layout-content"]').prop('id')).toBe('main');
        });
    });

    describe('Navigation', () => {
        it('renders an avatar and the site name linking to the homepage', () => {
            const logoWrapper = mount(
                <Layout>
                    <p data-testid="test-content">Rawr</p>
                </Layout>,
            )
                .find('[data-testid="navigation-logo"]')
                .hostNodes();

            expect(logoWrapper.prop('href')).toBe('/');
            expect(logoWrapper.find('[data-testid="navigation-logo-title"]').text()).toBe('fedknu.com');
            expect(logoWrapper.find('[data-testid="navigation-logo-image"]').props()).toMatchObject({ src: 'test-file-stub', alt: '' });
        });

        it('renders the right navigation items', () => {
            const wrapper = shallow(
                <Layout>
                    <p data-testid="test-content">Rawr</p>
                </Layout>,
            );

            expect(wrapper.find('[data-testid="layout-navigation-link"]')).toHaveLength(5);
            expect(wrapper.find('[data-testid="layout-navigation-link"]').at(0).props()).toMatchObject({ to: '/about', children: 'About' });
            expect(wrapper.find('[data-testid="layout-navigation-link"]').at(1).props()).toMatchObject({ to: '/', children: 'Blog' });
            expect(wrapper.find('[data-testid="layout-navigation-link"]').at(2).props()).toMatchObject({
                target: '_blank',
                rel: 'noopener noreferrer',
                href: 'https://github.com/fed',
                children: 'GitHub',
            });
            expect(wrapper.find('[data-testid="layout-navigation-link"]').at(3).props()).toMatchObject({
                children: 'Mastodon',
                href: 'https://mas.to/@fed',
                rel: 'me noopener noreferrer',
                target: '_blank',
            });
            expect(wrapper.find('[data-testid="layout-navigation-link"]').at(4).props()).toMatchObject({
                children: 'RSS',
                href: '/rss.xml',
            });
        });
    });

    it('renders any content it gets passed in', () => {
        const contentWrapper = shallow(
            <Layout>
                <p data-testid="test-content">Rawr</p>
            </Layout>,
        ).find('[data-testid="layout-content"]');

        expect(contentWrapper.find('[data-testid="test-content"]').exists()).toBe(true);
        expect(contentWrapper.text()).toBe('Rawr');
    });
});
