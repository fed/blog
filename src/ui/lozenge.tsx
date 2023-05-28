import React from 'react';

import { lozenge } from './lozenge.css';

type LozengeType = 'default' | 'primary' | 'success' | 'error' | 'warning' | 'info';

interface Props {
    children: React.ReactNode;
    type?: LozengeType;
}

export const Lozenge: React.FC<Props> = ({ children, type = 'default' }) => <span className={lozenge[type]}>{children}</span>;
