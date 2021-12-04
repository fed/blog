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

    describe('when clicking on the skip to main content button', () => {
        let useRefSpy;
        let focus;

        beforeEach(() => {
            focus = jest.fn();
            useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: { querySelector: () => ({ focus }) } });
        });

        afterEach(() => {
            jest.resetAllMocks();
        });

        it('shifts the focus to the main content', () => {
            const wrapper = shallow(
                <Layout>
                    <a href="/rawr">This is some test content</a>
                </Layout>,
            );

            expect(useRefSpy).toBeCalledTimes(1);
            expect(useRefSpy).toHaveBeenCalledWith(null);
            expect(focus).not.toHaveBeenCalled();

            wrapper.find('[data-testid="layout-skip-to-main-content-button"]').simulate('click');

            expect(focus).toBeCalledTimes(1);
        });
    });
});
