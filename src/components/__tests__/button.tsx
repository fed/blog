import React from 'react';
import renderer from 'react-test-renderer';

import { Social } from '../../types';
import { Button } from '../button';

describe('Button', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(
                <Button type={Social.TWITTER} url="https://twitter.com/fknussel">
                    Twitter
                </Button>,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
