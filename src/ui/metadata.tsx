import React from 'react';
import styled from 'styled-components';

import calendarIcon from '../assets/calendar.svg';
import categoryIcon from '../assets/category.svg';
import clockIcon from '../assets/clock.svg';
import { colors, containerDimensions, fontFamilies, gridSize } from '../styles/constants';

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;

    @media (min-width: ${containerDimensions.xs}) {
        align-items: center;
        display: flex;
    }
`;

const ListItem = styled.li`
    display: flex;

    :not(:last-child) {
        margin-bottom: ${2 * gridSize}px;
        margin-right: ${3 * gridSize}px;
    }

    @media (min-width: ${containerDimensions.xs}) {
        align-items: center;
        display: inline-flex;
        margin-bottom: 0;

        :not(:last-child) {
            margin-right: ${3.25 * gridSize}px;
            margin-bottom: 0;
        }
    }
`;

const Icon = styled.img`
    height: ${2 * gridSize}px;
    margin-right: ${gridSize}px;
    width: ${2 * gridSize}px;

    @media (min-width: ${containerDimensions.xs}) {
        margin-right: ${1.25 * gridSize}px;
    }
`;

const Text = styled.span`
    color: ${colors.grayMedium};
    font-family: ${fontFamilies.sansSerif};
    font-size: 14px;
    text-transform: uppercase;
`;

interface Props {
    date: string;
    categoryTitle: string;
    timeToRead: number;
}

export const Metadata: React.FC<Props> = ({ date, categoryTitle, timeToRead }) => (
    <List>
        <ListItem>
            <Icon src={calendarIcon} alt="Date published" title="Date published" />
            <Text>{date}</Text>
        </ListItem>
        <ListItem>
            <Icon src={categoryIcon} alt="Category" title="Category" />
            <Text>{categoryTitle}</Text>
        </ListItem>
        <ListItem>
            <Icon src={clockIcon} alt="Time to read" title="Time to read" />
            <Text>{timeToRead} min. read</Text>
        </ListItem>
    </List>
);
