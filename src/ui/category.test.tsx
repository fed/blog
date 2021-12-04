import { shallow } from 'enzyme';
import React from 'react';

import { Category } from './category';
import { CategoryId } from './types';

describe('Category', () => {
    describe('when no date categoryId gets passed in', () => {
        it("shouldn't render anything", () => {
            const wrapper = shallow(<Category categoryId={undefined} />);

            expect(wrapper.isEmptyRender()).toBe(true);
        });
    });

    describe('when an invalid categoryId gets passed in', () => {
        it("shouldn't render anything", () => {
            const wrapper = shallow(<Category categoryId={'rawr' as CategoryId} />);

            expect(wrapper.isEmptyRender()).toBe(true);
        });
    });

    describe('when a valid categoryId gets passed in', () => {
        it('should render the category component with the right style and content', () => {
            const wrapper = shallow(<Category categoryId={CategoryId.DOM} />);

            expect(wrapper.isEmptyRender()).toBe(false);
            expect(wrapper.props()).toEqual({
                categoryId: 'dom',
                children: 'DOM & Web APIs',
            });
        });
    });
});
