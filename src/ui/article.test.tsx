import { shallow } from 'enzyme';
import React from 'react';
import { Twemoji } from 'react-emoji-render';

import { Article } from './article';
import { CategoryId } from '../model/categories';

describe('Article', () => {
    const wrapper = shallow(
        <Article title="Test title" categoryId={CategoryId.FRP} date="June 1, 2020" datetime="2020-06-01T00:00:00.000Z">
            <p>Rawr</p>
        </Article>,
    );

    it('renders the metadata component with the right props', () => {
        const publicationDate = wrapper.find('[data-testid="metadata-publication-date"]');
        const category = wrapper.find('[data-testid="metadata-category"]');

        expect(publicationDate.exists()).toBe(true);
        expect(publicationDate.prop('dateTime')).toBe('2020-06-01T00:00:00.000Z');
        expect(publicationDate.text()).toBe('June 1, 2020');

        expect(category.exists()).toBe(true);
        expect(category.text()).toBe('Category: Functional reactive programming');
    });

    it('renders the title component using Twemoji with the right props', () => {
        const twemoji = wrapper.find(Twemoji);

        expect(twemoji.exists()).toBe(true);
        expect(twemoji.props()).toEqual({
            svg: true,
            text: 'Test title',
        });
    });

    it('renders the body of the blog post as HTML', () => {
        expect(wrapper.find('[data-testid="article-body"]').prop('dangerouslySetInnerHTML')).toEqual({
            __html: <p>Rawr</p>,
        });
    });
});
