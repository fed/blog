import { shallow } from 'enzyme';
import React from 'react';

import { Navigation } from './navigation';

describe('Navigation', () => {
    it('renders an avatar and the site name linking to the homepage', () => {
        const logoWrapper = shallow(<Navigation />).find('[data-testid="navigation-logo"]');

        expect(logoWrapper.prop('to')).toBe('/');
        expect(logoWrapper.find('[data-testid="navigation-logo-title"]').text()).toBe('Federico Knüssel');
        expect(logoWrapper.find('[data-testid="navigation-logo-image"]').props()).toMatchObject({ src: 'test-file-stub', alt: '' });
    });

    it('renders the right navigation items', () => {
        const wrapper = shallow(<Navigation />);

        expect(wrapper.find('[data-testid="navigation-link"]')).toHaveLength(4);
        expect(wrapper.find('[data-testid="navigation-link"]').at(0).props()).toMatchObject({ to: '/about', children: 'About' });
        expect(wrapper.find('[data-testid="navigation-link"]').at(1).props()).toMatchObject({
            target: '_blank',
            rel: 'noopener noreferrer',
            href: 'https://github.com/fed',
            children: 'GitHub',
        });
        expect(wrapper.find('[data-testid="navigation-link"]').at(2).props()).toMatchObject({
            children: 'Mastodon',
            href: 'https://mas.to/@fed',
            rel: 'me noopener noreferrer',
            target: '_blank',
        });
        expect(wrapper.find('[data-testid="navigation-link"]').at(3).props()).toMatchObject({
            children: 'RSS',
            href: '/rss.xml',
        });
    });
});
