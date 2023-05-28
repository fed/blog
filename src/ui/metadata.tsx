import React from 'react';
import styled from 'styled-components';

import { categories } from '../model';
import { colors, fontFamilies, fontSizes, gridSize } from '../styles/constants';
import { srOnly } from '../styles/mixins';
import { Lozenge } from './lozenge';
import { CategoryId } from './types';

const Container = styled.div`
    margin: 0 0 ${0.625 * gridSize}px;
`;

const PublicationDate = styled.span`
    color: ${colors.grayMedium};
    font-family: ${fontFamilies.sansSerif};
    font-size: ${fontSizes.xxs};
    margin-right: ${1.25 * gridSize}px;
    text-transform: uppercase;
`;

const SrOnly = styled.span`
    ${srOnly};
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
        <>
            <SrOnly>
                Published on {date} under the category {category?.title}
            </SrOnly>
            <Container aria-hidden="true">
                {date ? <PublicationDate data-testid="metadata-publication-date">{date}</PublicationDate> : null}
                {category?.title ? <Lozenge type={isPreview ? 'default' : 'primary'}>{category.title}</Lozenge> : null}
            </Container>
        </>
    );
};
