import React from 'react';
import renderer from 'react-test-renderer';

import { Article } from './article';
import { CategoryId } from './types';

describe('Article', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(
                <Article title="Rawr" date="October 19, 2019" categoryId={CategoryId.RXJS}>
                    This is a blog post
                </Article>,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
