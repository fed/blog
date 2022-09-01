import React from 'react';
import styled from 'styled-components';

import { categories } from '../model';
import { colors, fontFamilies, gridSize } from '../styles/constants';
import { Lozenge } from './lozenge';
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
    date?: string;
    categoryId?: CategoryId;
    isPreview?: boolean;
}

export const Metadata: React.FC<Props> = ({ date, categoryId, isPreview = false }) => {
    if (!date && !categoryId) {
        return null;
    }

    const category = categories.find((c) => c.id === categoryId);

    return (
        <Container>
            {date ? <PublicationDate data-testid="metadata-publication-date">{date}</PublicationDate> : null}
            {category ? <Lozenge type={isPreview ? 'default' : 'primary'}>{category.title}</Lozenge> : null}
        </Container>
    );
};
