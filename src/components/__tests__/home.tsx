import React from 'react';
import renderer from 'react-test-renderer';

import { Home } from '../home';

describe('Home', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(
                <Home>
                    <p>Content</p>
                </Home>,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
