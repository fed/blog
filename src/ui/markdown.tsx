import React from 'react';

import { markdownStyle } from './markdown.css';

// eslint-disable-next-line react/no-danger
export const Markdown: React.FC = ({ children }) => <div className={markdownStyle} dangerouslySetInnerHTML={{ __html: children }} />;
