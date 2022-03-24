import { shallow } from 'enzyme';
import React from 'react';
import { Twemoji } from 'react-emoji-render';

import { Link } from './link';
import { Metadata } from './metadata';
import { Preview } from './preview';
import { CategoryId } from './types';

describe('Preview', () => {
    const defaultProps = {
        id: '1',
        title: 'Test title',
        spoiler: 'This is some test content',
        date: 'January 1, 2020',
        categoryId: CategoryId.FRP,
        isExternal: false,
    };

    it('renders the Metadata component with the right content', () => {
        const wrapper = shallow(<Preview {...defaultProps} />);

        expect(wrapper.find(Metadata).exists()).toBe(true);
        expect(wrapper.find(Metadata).props()).toEqual({ date: 'January 1, 2020', categoryId: 'frp' });
    });

    it('renders the right title including emojis', () => {
        const wrapper = shallow(<Preview {...defaultProps} />);

        expect(wrapper.find('[data-testid="preview-title"]').find(Twemoji).exists()).toBe(true);
        expect(wrapper.find(Twemoji).props()).toEqual({ svg: true, text: 'Test title' });
    });

    it('renders a link with the right URL', () => {
        const wrapper = shallow(<Preview {...defaultProps} slug="/about" />);

        expect(wrapper.find(Link).props()).toMatchObject({ isExternal: false, to: '/about' });
    });

    describe('when the post is not hosted locally', () => {
        it('renders an external link icon next to the title', () => {
            const wrapper = shallow(<Preview {...defaultProps} url="https://medium.com/some-blog-post" isExternal />);

            expect(wrapper.find(Link).props()).toMatchObject({ isExternal: true, to: 'https://medium.com/some-blog-post' });
        });
    });

    it('renders the right spoiler', () => {
        const wrapper = shallow(<Preview {...defaultProps} />);

        expect(wrapper.find('[data-testid="preview-spoiler"]').text()).toBe('This is some test content');
    });
});
