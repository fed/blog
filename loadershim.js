import { TextDecoder, TextEncoder } from 'util';

global.___loader = {
    enqueue: jest.fn(),
};

// This is needed so that @wojtekmaj/enzyme-adapter-react-17 works with React 18
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
