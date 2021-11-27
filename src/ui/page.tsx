import React from 'react';
import { Twemoji } from 'react-emoji-render';
import styled from 'styled-components';

import { baseTitleStyles } from '../styles/mixins';
import { Markdown } from './markdown';

const Title = styled.h1`
    ${baseTitleStyles};
`;

interface Props {
    title: string;
    children: React.ReactNode;
}

export const Page: React.FC<Props> = ({ title, children }) => (
    <>
        <Title>
            <Twemoji svg text={title} />
        </Title>
        <Markdown>{children}</Markdown>
    </>
);
