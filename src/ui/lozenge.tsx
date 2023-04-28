import React, { type ReactNode, type FC } from 'react';

import {
    defaultLozengeStyle,
    errorLozengeStyle,
    infoLozengeStyle,
    primaryLozengeStyle,
    successLozengeStyle,
    warningLozengeStyle,
} from './lozenge.css';

interface Props {
    children: ReactNode;
    type?: 'default' | 'primary' | 'success' | 'error' | 'warning' | 'info';
}

export const Lozenge: FC<Props> = ({ children, type }) => {
    const className = (() => {
        switch (type) {
            case 'primary':
                return primaryLozengeStyle;

            case 'success':
                return successLozengeStyle;

            case 'error':
                return errorLozengeStyle;

            case 'warning':
                return warningLozengeStyle;

            case 'info':
                return infoLozengeStyle;

            case 'default':
            default:
                return defaultLozengeStyle;
        }
    })();

    return <span className={className}>{children}</span>;
};
