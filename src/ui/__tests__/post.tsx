import React from 'react';
import renderer from 'react-test-renderer';

import { Post } from '../post';

describe('Post', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(
                <Post
                    title=""
                    date="October 19, 2019"
                    category="General"
                    timeToRead={2}
                    body="This is a blog post"
                />,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
