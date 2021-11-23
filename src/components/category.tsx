import React from 'react';
import styled, { css } from 'styled-components';

import { categories } from '../data';
import { colors, fontFamilies } from '../styles/constants';
import { CategoryId } from '../types';

const Container = styled.span<{ id: CategoryId }>`
    border-radius: 3px;
    color: ${colors.white};
    display: inline-block;
    font-family: ${fontFamilies.sansSerif};
    font-size: 11px;
    font-weight: 600;
    line-height: 1;
    padding: 3px 4px;
    text-transform: uppercase;
    white-space: nowrap;

    ${(props) =>
        props.id === CategoryId.REACT &&
        css`
            background-color: ${colors.blue};
        `}

    ${(props) =>
        props.id === CategoryId.TESTING &&
        css`
            background-color: ${colors.green};
        `}

    ${(props) =>
        props.id === CategoryId.JAVASCRIPT &&
        css`
            background-color: ${colors.yellow};
            color: ${colors.brown};
        `}

    ${(props) =>
        [CategoryId.RXJS, CategoryId.BACONJS].includes(props.id) &&
        css`
            background-color: ${colors.red};
        `}

    ${(props) =>
        props.id === CategoryId.DOM &&
        css`
            background-color: ${colors.purple};
        `}

    ${(props) =>
        props.id === CategoryId.ACCESSIBILITY &&
        css`
            background-color: ${colors.teal};
        `}

    ${(props) =>
        props.id === CategoryId.GENERAL &&
        css`
            background-color: ${colors.navy};
        `}
`;

interface Props {
    id: CategoryId;
}

export const Category: React.FC<Props> = ({ id }) => {
    const category = categories.find((c) => c.id === id);

    if (!category) {
        return null;
    }

    return <Container id={id}>{category.title}</Container>;
};
