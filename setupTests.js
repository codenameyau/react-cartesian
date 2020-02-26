import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

global.React = React;
global.mount = mount;
global.shallow = shallow;
