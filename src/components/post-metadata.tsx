import React from 'react';
import styled from 'styled-components';

import calendarIcon from '../assets/calendar.svg';
import categoryIcon from '../assets/category.svg';
import clockIcon from '../assets/clock.svg';
import { fontFamilySansSerif, sizeContainerExtraSmall } from '../styles/mixins';

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    @media (min-width: ${sizeContainerExtraSmall}) {
        align-items: center;
        display: flex;
    }
`;

const ListItem = styled.li`
    display: flex;
    :not(:last-child) {
        margin-bottom: 16px;
        margin-right: 24px;
    }
    @media (min-width: ${sizeContainerExtraSmall}) {
        align-items: center;
        display: inline-flex;
        margin-bottom: 0;
        :not(:last-child) {
            margin-right: 26px;
            margin-bottom: 0;
        }
    }
`;

const Icon = styled.img`
    height: 16px;
    margin-right: 8px;
    width: 16px;
    @media (min-width: ${sizeContainerExtraSmall}) {
        margin-right: 10px;
    }
`;

const Text = styled.span`
    color: #6a7482;
    font-family: ${fontFamilySansSerif};
    font-size: 12px;
    text-transform: uppercase;
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
            <Text>
                <time pubdate="pubdate">{date}</time>
            </Text>
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
