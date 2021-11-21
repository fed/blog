import React from 'react';
import styled, { css } from 'styled-components';

import { categories } from '../data';
import { fontFamilySansSerif } from '../styles/mixins';
import { CategoryId } from '../types';

const Container = styled.span`
    border-radius: 3px;
    color: #fff;
    display: inline-block;
    font-family: ${fontFamilySansSerif};
    font-size: 11px;
    font-weight: 600;
    line-height: 1;
    padding: 3px 4px;
    text-transform: uppercase;
    white-space: nowrap;

    ${(props) =>
        props.id === CategoryId.REACT &&
        css`
            background-color: #056cc1;
        `}

    ${(props) =>
        props.id === CategoryId.TESTING &&
        css`
            background-color: #36b37d;
        `}

    ${(props) =>
        props.id === CategoryId.JAVASCRIPT &&
        css`
            background-color: #f9ca5e;
            color: #172b4d;
        `}

    ${(props) =>
        [CategoryId.RXJS, CategoryId.BACONJS].includes(props.id) &&
        css`
            background-color: #ff7453;
        `}

    ${(props) =>
        props.id === CategoryId.DOM &&
        css`
            background-color: #6554c0;
        `}

    ${(props) =>
        props.id === CategoryId.ACCESSIBILITY &&
        css`
            background-color: #00b8d9;
        `}

    ${(props) =>
        props.id === CategoryId.GENERAL &&
        css`
            background-color: #243857;
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
