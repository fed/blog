import { shallow } from 'enzyme';
import React from 'react';

import { Lozenge } from './lozenge';
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
            const wrapper = shallow(<Metadata date={undefined} categoryId={CategoryId.FRP} />);

            expect(wrapper.isEmptyRender()).toBe(false);
            expect(wrapper.find('[data-testid="metadata-publication-date"]').exists()).toBe(false);
            expect(wrapper.find(Lozenge).exists()).toBe(true);
            expect(wrapper.find(Lozenge).prop('$type')).toBe('primary');
            expect(wrapper.find(Lozenge).prop('children')).toBe('Functional Reactive Programming');
        });
    });

    describe('when no categoryId is passed in', () => {
        it("doesn't render the lozenge component", () => {
            const wrapper = shallow(<Metadata date="January 1, 2021" categoryId={undefined} />);

            expect(wrapper.isEmptyRender()).toBe(false);
            expect(wrapper.find('[data-testid="metadata-publication-date"]').exists()).toBe(true);
            expect(wrapper.find('[data-testid="metadata-publication-date"]').text()).toBe('January 1, 2021');
            expect(wrapper.find(Lozenge).exists()).toBe(false);
        });
    });

    describe('when both a date and a categoryId are passed in', () => {
        it('renders both the publication date and the lozenge component', () => {
            const wrapper = shallow(<Metadata date="January 1, 2021" categoryId={CategoryId.FRP} />);

            expect(wrapper.isEmptyRender()).toBe(false);
            expect(wrapper.find('[data-testid="metadata-publication-date"]').exists()).toBe(true);
            expect(wrapper.find('[data-testid="metadata-publication-date"]').text()).toBe('January 1, 2021');
            expect(wrapper.find(Lozenge).exists()).toBe(true);
            expect(wrapper.find(Lozenge).prop('$type')).toBe('primary');
            expect(wrapper.find(Lozenge).prop('children')).toBe('Functional Reactive Programming');
        });
    });

    describe('when the metadata component is being rendered as part of a preview', () => {
        it('renders the right lozenge type', () => {
            const wrapper = shallow(<Metadata date="January 1, 2021" categoryId={CategoryId.FRP} isPreview />);

            expect(wrapper.find(Lozenge).prop('$type')).toBe('default');
        });
    });

    describe('when the metadata component is being rendered as part of a full blog post', () => {
        it('renders the right lozenge type', () => {
            const wrapper = shallow(<Metadata date="January 1, 2021" categoryId={CategoryId.FRP} isPreview={false} />);

            expect(wrapper.find(Lozenge).prop('$type')).toBe('primary');
        });
    });
});
