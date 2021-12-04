import { shallow } from 'enzyme';
import React from 'react';

import { Category } from './category';
import { Metadata } from './metadata';
import { CategoryId } from './types';

describe('Metadata', () => {
    describe('when no date nor categoryId are passed in', () => {
        it("doesn't render anything", () => {
            const wrapper = shallow(<Metadata date={undefined} categoryId={undefined} />);

            expect(wrapper.isEmptyRender()).toBe(true);
        });
    });

    describe('when no date is passed in', () => {
        it("doesn't render the publication date component", () => {
            const wrapper = shallow(<Metadata date={undefined} categoryId={CategoryId.RXJS} />);

            expect(wrapper.isEmptyRender()).toBe(false);
            expect(wrapper.find('[data-testid="metadata-publication-date"]').exists()).toBe(false);
            expect(wrapper.find(Category).exists()).toBe(true);
            expect(wrapper.find(Category).prop('categoryId')).toBe(CategoryId.RXJS);
        });
    });

    describe('when no categoryId is passed in', () => {
        it("doesn't render the category component", () => {
            const wrapper = shallow(<Metadata date="January 1, 2021" categoryId={undefined} />);

            expect(wrapper.isEmptyRender()).toBe(false);
            expect(wrapper.find('[data-testid="metadata-publication-date"]').exists()).toBe(true);
            expect(wrapper.find('[data-testid="metadata-publication-date"]').text()).toBe('January 1, 2021');
            expect(wrapper.find(Category).exists()).toBe(false);
        });
    });

    describe('when both a date and a categoryId are passed in', () => {
        it('renders both the publication date and the category component', () => {
            const wrapper = shallow(<Metadata date="January 1, 2021" categoryId={CategoryId.RXJS} />);

            expect(wrapper.isEmptyRender()).toBe(false);
            expect(wrapper.find('[data-testid="metadata-publication-date"]').exists()).toBe(true);
            expect(wrapper.find('[data-testid="metadata-publication-date"]').text()).toBe('January 1, 2021');
            expect(wrapper.find(Category).exists()).toBe(true);
            expect(wrapper.find(Category).prop('categoryId')).toBe(CategoryId.RXJS);
        });
    });
});
