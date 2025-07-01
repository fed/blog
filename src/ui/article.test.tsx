import { render, screen } from '@testing-library/react';
import React from 'react';

import { Article } from './article';
import { CategoryId } from '../model/categories';

// Mock the Twemoji component to make testing easier
jest.mock('react-emoji-render', () => ({
    Twemoji: ({ text, svg }) => (
        <span data-testid="twemoji" data-svg={svg}>
            {text}
        </span>
    ),
}));

describe('Article', () => {
    beforeEach(() => {
        render(
            <Article title="Test title" categoryId={CategoryId.FRP} date="June 1, 2020" datetime="2020-06-01T00:00:00.000Z" isBlogPost>
                {'<p>Rawr</p>'}
            </Article>,
        );
    });

    it('renders the right metadata', () => {
        const publicationDate = screen.getByTestId('metadata-publication-date');
        const category = screen.getByTestId('metadata-category');

        expect(publicationDate).toBeInTheDocument();
        expect(publicationDate).toHaveAttribute('dateTime', '2020-06-01T00:00:00.000Z');
        expect(publicationDate).toHaveTextContent('June 1, 2020');

        expect(category).toBeInTheDocument();
        expect(category).toHaveTextContent('Category: Functional reactive programming');
    });

    it('renders the title component using Twemoji with the right props', () => {
        const twemoji = screen.getByTestId('twemoji');

        expect(twemoji).toBeInTheDocument();
        expect(twemoji).toHaveTextContent('Test title');
        expect(twemoji).toHaveAttribute('data-svg', 'true');
    });

    it('renders the body of the blog post as HTML', () => {
        const articleBody = screen.getByTestId('article-body-markdown');

        expect(articleBody).toBeInTheDocument();

        // Test that the right HTML content is rendered
        expect(articleBody.innerHTML).toBe('<p>Rawr</p>');

        // Test that the text content is present
        expect(articleBody).toHaveTextContent('Rawr');
    });
});
