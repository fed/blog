import { shallow } from 'enzyme';
import React from 'react';

import { Link } from './link';

describe('Link', () => {
    describe('when the link is local', () => {
        it("renders Gatsby's Link component with the right props", () => {
            const wrapper = shallow(<Link to="/about">About page</Link>);

            expect(wrapper.isEmptyRender()).toBe(false);
            expect(wrapper.props()).toEqual({
                to: '/about',
                children: 'About page',
                rel: 'bookmark',
            });
        });
    });

    describe('when the link is external', () => {
        it('renders both a link to the external website with the right attributes', () => {
            const wrapper = shallow(
                <Link to="https://github.com/fed" isExternal>
                    GitHub
                </Link>,
            );

            expect(wrapper.find('[data-testid="link-external-anchor"]').exists()).toBe(true);
            expect(wrapper.find('[data-testid="link-external-anchor"]').props()).toMatchObject({
                children: 'GitHub',
                href: 'https://github.com/fed',
                rel: 'noopener noreferrer',
                target: '_blank',
            });
        });

        it('renders both a link to the external website and an icon', () => {
            const wrapper = shallow(
                <Link to="https://github.com/fed" isExternal>
                    GitHub
                </Link>,
            );

            expect(wrapper.find('[data-testid="link-external-icon"]').exists()).toBe(true);
            expect(wrapper.find('[data-testid="link-external-icon"]').props()).toMatchObject({
                alt: 'External link',
                src: 'test-file-stub',
            });
        });
    });
});
