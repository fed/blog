import { shallow } from 'enzyme';
import React from 'react';

import { Layout } from './layout';
import { Navigation } from './navigation';

describe('Layout', () => {
    it('renders the navigation menu', () => {
        const wrapper = shallow(<Layout />);

        expect(wrapper.find(Navigation).exists()).toBe(true);
    });

    it('renders whatever content it gets passed in', () => {
        const wrapper = shallow(
            <Layout>
                <p data-testid="test-content">This is some test content</p>
            </Layout>,
        );

        const content = wrapper.find('[data-testid="layout-content"]');

        expect(content.find('[data-testid="test-content"]').exists()).toBe(true);
        expect(content.text()).toBe('This is some test content');
    });

    it('renders the skip to main content button', () => {
        const wrapper = shallow(<Layout />);

        expect(wrapper.find('[data-testid="layout-skip-to-main-content-button"]').exists()).toBe(true);
    });

    // @TODO:
    // describe('when clicking on the skip to main content button', () => {});
    // it('shifts the focus to the main content', () => {});
});
