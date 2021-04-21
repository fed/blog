import React from 'react';
import renderer from 'react-test-renderer';

import { PostMetadata } from '../post-metadata';

describe('PostMetadata', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<PostMetadata date="April 21, 2021" categoryTitle="General" timeToRead={2} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
