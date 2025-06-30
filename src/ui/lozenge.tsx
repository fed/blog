import React from 'react';

import { lozenge } from './lozenge.css';

type LozengeAppearance = 'default' | 'primary' | 'success' | 'error' | 'warning' | 'info';

interface Props {
    children: React.ReactNode;
    appearance?: LozengeAppearance;
}

export const Lozenge: React.FunctionComponent<Props> = ({ children, appearance = 'default' }) => (
    <span className={lozenge[appearance]}>{children}</span>
);
