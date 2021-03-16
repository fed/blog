import React from 'react';
import styled from 'styled-components';

import calendarIcon from '../assets/calendar.svg';
import categoryIcon from '../assets/category.svg';
import { baseSubtitleStyles } from '../styles/mixins';

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding-left: 0;
    @media (min-width: 768px) {
        align-items: center;
        display: flex;
    }
`;

const ListItem = styled.li`
    ${baseSubtitleStyles};
    display: inline-flex;
    margin-bottom: 16px;
    :not(:last-child) {
        margin-right: 24px;
    }
    @media (min-width: 768px) {
        align-items: center;
        display: inline-flex;
        margin-bottom: 0;
        :not(:last-child) {
            margin-right: 40px;
        }
    }
`;

const Icon = styled.img`
    height: 20px;
    margin-right: 8px;
    width: 20px;
    @media (min-width: 768px) {
        margin-right: 10px;
    }
`;

export function PostDetails(props) {
    return (
        <List className={props.className}>
            <ListItem>
                <Icon src={calendarIcon} alt="Date published" title="Date published" />
                <time pubdate="pubdate">{props.date}</time>
            </ListItem>
            <ListItem>
                <Icon src={categoryIcon} alt="Category" title="Category" />
                {props.categoryTitle}
            </ListItem>
        </List>
    );
}
