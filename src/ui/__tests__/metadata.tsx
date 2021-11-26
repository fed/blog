import React from 'react';
import renderer from 'react-test-renderer';

import { Metadata } from '../metadata';

describe('PostMetadata', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Metadata date="April 21, 2021" categoryTitle="General" timeToRead={2} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
