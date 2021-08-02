import React from 'react';
import styled, { css } from 'styled-components';

import { categories } from '../data';
import { CategoryId } from '../types';

const Container = styled.span`
    border-radius: 100%;
    display: inline-block;
    height: 16px;
    margin-right: 10px;
    width: 16px;

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
        `}

    ${(props) =>
        [CategoryId.RXJS, CategoryId.BACONJS].includes(props.id) &&
        css`
            background-color: #ff7453;
        `}

    ${(props) =>
        props.id === CategoryId.BROWSERS &&
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

    return <Container id={id} title={category.title} />;
};
