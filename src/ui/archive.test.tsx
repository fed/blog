import React from 'react';
import renderer from 'react-test-renderer';

import { Archive } from './archive';

describe('Archive', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Archive posts={[]} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
