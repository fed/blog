import { shallow } from 'enzyme';
import React from 'react';

import { Markdown } from './markdown';

describe('Layout', () => {
    it('renders any content it gets passed in as HTML', () => {
        const wrapper = shallow(<Markdown>{'<p>This is some test content</p>'}</Markdown>);

        expect(wrapper.prop('dangerouslySetInnerHTML')).toEqual({
            __html: '<p>This is some test content</p>',
        });
    });
});
