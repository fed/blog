const React = require('react');

module.exports = {
    graphql: jest.fn(),
    Link: jest.fn().mockImplementation(
        // these props are invalid for an `a` tag
        ({ activeClassName, activeStyle, getProps, innerRef, partiallyActive, ref, replace, to, ...rest }) =>
            React.createElement('a', {
                ...rest,
                href: to,
            }),
    ),
    StaticQuery: jest.fn(),
    useStaticQuery: jest.fn(),
    navigate: jest.fn(),
    withPrefix: jest.fn().mockImplementation((path) => path),
};
