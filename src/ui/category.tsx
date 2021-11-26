import React from 'react';
import styled, { css } from 'styled-components';

import { categories } from '../data';
import { colors, fontFamilies, gridSize } from '../styles/constants';
import { CategoryId } from './types';

interface Props {
    categoryId: CategoryId;
}

const Container = styled.span<Props>`
    border-radius: 3px;
    color: ${colors.white};
    display: inline-block;
    font-family: ${fontFamilies.sansSerif};
    font-size: 11px;
    font-weight: 600;
    line-height: 1;
    padding: ${0.375 * gridSize}px ${0.5 * gridSize}px;
    text-transform: uppercase;
    white-space: nowrap;

    ${(props) =>
        props.categoryId === CategoryId.REACT &&
        css`
            background-color: ${colors.blue};
        `}

    ${(props) =>
        props.categoryId === CategoryId.TESTING &&
        css`
            background-color: ${colors.green};
        `}

    ${(props) =>
        props.categoryId === CategoryId.JAVASCRIPT &&
        css`
            background-color: ${colors.yellow};
            color: ${colors.brown};
        `}

    ${(props) =>
        [CategoryId.RXJS, CategoryId.BACONJS].includes(props.categoryId) &&
        css`
            background-color: ${colors.red};
        `}

    ${(props) =>
        props.categoryId === CategoryId.DOM &&
        css`
            background-color: ${colors.purple};
        `}

    ${(props) =>
        props.categoryId === CategoryId.ACCESSIBILITY &&
        css`
            background-color: ${colors.teal};
        `}

    ${(props) =>
        props.categoryId === CategoryId.GENERAL &&
        css`
            background-color: ${colors.navy};
        `}
`;

export const Category: React.FC<Props> = ({ categoryId }) => {
    const category = categories.find((c) => c.id === categoryId);

    if (!category) {
        return null;
    }

    return <Container categoryId={categoryId}>{category.title}</Container>;
};
