import React from 'react';
import styled from 'styled-components';

import calendarIcon from '../assets/calendar.svg';
import categoryIcon from '../assets/category.svg';
import clockIcon from '../assets/clock.svg';
import { sizeContainerMedium, fontFamilySansSerif, sizeContainerLarge } from '../styles/mixins';

const List = styled.ul`
    background-color: #deebff;
    border-radius: 3px;
    list-style-type: none;
    margin: 0;
    padding: 16px;
    border-left: 6px solid #4c9aff;
    @media (min-width: ${sizeContainerLarge}) {
        align-items: center;
        display: flex;
    }
`;

const ListItem = styled.li`
    font-family: ${fontFamilySansSerif};
    font-size: 16px;
    font-weight: 200;
    display: flex;
    :not(:last-child) {
        margin-right: 24px;
        margin-bottom: 16px;
    }
    @media (min-width: ${sizeContainerMedium}) {
        align-items: center;
        display: inline-flex;
        margin-bottom: 0;
        :not(:last-child) {
            margin-right: 40px;
            margin-bottom: 0;
        }
    }
`;

const Icon = styled.img`
    height: 20px;
    margin-right: 8px;
    width: 20px;
    @media (min-width: ${sizeContainerLarge}) {
        margin-right: 10px;
    }
`;

interface Props {
    date: string;
    categoryTitle: string;
    timeToRead: number;
}

export const PostMetadata: React.FC<Props> = ({ date, categoryTitle, timeToRead }) => (
    <List>
        <ListItem>
            <Icon src={calendarIcon} alt="Date published" title="Date published" />
            <time pubdate="pubdate">{date}</time>
        </ListItem>
        <ListItem>
            <Icon src={categoryIcon} alt="Category" title="Category" />
            {categoryTitle}
        </ListItem>
        <ListItem>
            <Icon src={clockIcon} alt="Time to read" title="Time to read" />
            {timeToRead} min. read
        </ListItem>
    </List>
);
