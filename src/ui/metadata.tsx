import React from 'react';
import styled from 'styled-components';

import { colors, fontFamilies, gridSize } from '../styles/constants';
import { Category } from './category';
import { CategoryId } from './types';

const Container = styled.div`
    margin: 0 0 ${0.625 * gridSize}px;
`;

const PublicationDate = styled.span`
    color: ${colors.grayMedium};
    font-family: ${fontFamilies.sansSerif};
    font-size: 12px;
    margin-right: ${1.25 * gridSize}px;
    text-transform: uppercase;
`;

interface Props {
    date: string;
    categoryId: CategoryId;
}

export const Metadata: React.FC<Props> = ({ date, categoryId }) => {
    if (!date && !categoryId) {
        return null;
    }

    return (
        <Container>
            {date ? <PublicationDate data-testid="metadata-publication-date">{date}</PublicationDate> : null}
            {categoryId ? <Category categoryId={categoryId} /> : null}
        </Container>
    );
};
