import React from 'react';
import { shallow, render } from 'enzyme';
import Qwerty from '../components/Qwerty';

describe('ButtonForm', () => {
	it('ButtonForm render', () => {
		const wrapper = shallow(<Qwerty/>);
		expect(wrapper).toMatchSnapshot();
	});
});