import React from 'react';
import styled, { css } from 'styled-components';

import { fontFamilySansSerif } from '../styles/mixins';

const Container = styled.span`
    border-radius: 3px;
    display: inline-block;
    font-family: ${fontFamilySansSerif};
    font-size: 11px;
    font-weight: 600;
    line-height: 1;
    padding: 3px 4px;
    text-transform: uppercase;
    white-space: nowrap;

    ${(props) =>
        props.type === 'info' &&
        css`
            background-color: #deebff;
            color: #0747a6;
        `}

    ${(props) =>
        props.type === 'success' &&
        css`
            background-color: #e3fcef;
            color: #006644;
        `}

    ${(props) =>
        props.type === 'warning' &&
        css`
            background-color: #fff0b3;
            color: #172b4d;
        `}

    ${(props) =>
        props.type === 'error' &&
        css`
            background-color: #ffebe6;
            color: #bf2600;
        `}

    ${(props) =>
        props.type === 'note' &&
        css`
            background-color: #eae6ff;
            color: #403294;
        `}

    ${(props) =>
        props.type === 'default' &&
        css`
            background-color: #dfe1e6;
            color: #42526e;
        `}
`;

type LozengeType = 'info' | 'success' | 'warning' | 'error' | 'note' | 'default';

interface Props {
    type: LozengeType;
    children: string;
}

export const Lozenge: React.FC<Props> = ({ type, children }) => (
    <Container type={type}>{children}</Container>
);
