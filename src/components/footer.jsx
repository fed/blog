import React from 'react';
import styled from 'styled-components';

import links from '../data/social';
import { baseDefaultFocusStateStyles } from '../styles/mixins';

const Container = styled.footer`
    align-items: center;
    background-color: #fafafac9;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100px;
    justify-content: center;
`;

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding-left: 0;
`;

const ListItem = styled.li`
    display: inline-block;
    :not(:last-child) {
        margin-right: 24px;
    }
`;

const Link = styled.a`
    ${baseDefaultFocusStateStyles};
    display: inline-block;
    padding: 6px;
`;

const Icon = styled.img`
    display: inline-block;
    height: 25px;
    vertical-align: middle;
    width: 25px;
`;

export default function Footer() {
    return (
        <Container aria-label="Social media links">
            <List>
                {links.map((item) => (
                    <ListItem key={item.id}>
                        <Link href={item.url} target="_blank" rel="noopener noreferrer">
                            <Icon src={item.icon} alt={item.name} />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}
