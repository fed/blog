// While testing against actual styles is often desirable, it can be a major slowdown in your tests.
// If your tests don’t require styles to be available, importing `disableRuntimeStyles` will prevent all style creation.
import '@vanilla-extract/css/disableRuntimeStyles';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });
