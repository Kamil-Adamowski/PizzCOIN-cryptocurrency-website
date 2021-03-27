import React from 'react';
import { shallow } from 'enzyme';
import { DropdownItem } from '../dropdownItemm';

describe('DropdownItem component', () => {
it("Expects to run onClick named sortType function when button is pressed in the DOM", () => {
    const mockCallBackClick = jest.fn();
    const wrapper = shallow(<DropdownItem sortType={mockCallBackClick} className="test"/>);
    wrapper.find('button').simulate('click');
    expect(mockCallBackClick.mock.calls.length).toEqual(1);
  });
  it("Expects to find button HTML element with className test in the DOM", () => {
    const wrapper = shallow(<DropdownItem name="test"/>)
    expect(wrapper.find('button')).toHaveLength(1);
  });

it("Expects to find button HTML element in the DOM", () => {
    const wrapper = shallow(<DropdownItem name="test"/>)
    expect(wrapper.find('button')).toHaveLength(1);
  });
});