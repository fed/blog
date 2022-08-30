import React from 'react';
import styled from 'styled-components';

import { categories } from '../model';
import { colors, fontFamilies, fontWeights, gridSize } from '../styles/constants';
import { CategoryId } from './types';

interface Props {
    categoryId?: CategoryId;
    isHighlighted?: boolean;
}

const Container = styled.span<{ isHighlighted: boolean }>`
    background-color: ${(props) => (props.isHighlighted ? colors.blue : colors.grayMedium)};
    border-radius: 3px;
    color: ${colors.white};
    display: inline-block;
    font-family: ${fontFamilies.sansSerif};
    font-size: 11px;
    font-weight: ${fontWeights.bold};
    line-height: 1;
    padding: ${0.375 * gridSize}px ${0.5 * gridSize}px;
    text-transform: uppercase;
    white-space: nowrap;
`;

export const Category: React.FC<Props> = ({ categoryId, isHighlighted = false }) => {
    const category = categories.find((c) => c.id === categoryId);

    if (!category) {
        return null;
    }

    return <Container isHighlighted={isHighlighted}>{category.title}</Container>;
};
