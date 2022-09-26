import { shallow } from 'enzyme';
import React from 'react';
import { Twemoji } from 'react-emoji-render';

import { Article } from './article';
import { Markdown } from './markdown';
import { Metadata } from './metadata';
import { CategoryId } from './types';

describe('Article', () => {
    const wrapper = shallow(
        <Article title="Test title" categoryId={CategoryId.FRP} date="June 1, 2020">
            Test content
        </Article>,
    );

    it('renders the metadata component with the right props', () => {
        const metadata = wrapper.find(Metadata);

        expect(metadata.exists()).toBe(true);
        expect(metadata.props()).toEqual({
            date: 'June 1, 2020',
            categoryId: 'frp',
        });
    });

    it('renders the title component using Twemoji with the right props', () => {
        const twemoji = wrapper.find(Twemoji);

        expect(twemoji.exists()).toBe(true);
        expect(twemoji.props()).toEqual({
            svg: true,
            text: 'Test title',
        });
    });

    it('renders the markdown component with the right props', () => {
        const markdown = wrapper.find(Markdown);

        expect(markdown.exists()).toBe(true);
        expect(markdown.prop('children')).toBe('Test content');
    });
});
