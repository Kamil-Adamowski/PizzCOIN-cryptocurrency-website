import { shallow } from 'enzyme';
import { Dropdown } from '../dropdown';

describe('DropdownItem component', () => {
it("Expects to Test Click event", () => {
    const mockCallBackClick = jest.fn();
    const wrapper = shallow(<Dropdown setOpen={mockCallBackClick}/>);
    wrapper.find('#open-btn').simulate('click');

    expect(mockCallBackClick.mock.calls.length).toEqual(1);
    expect(wrapper).toMatchSnapshot()
  });

  it("Expects to Test children after click", () => {
    const wrapper = shallow(<Dropdown />);
    const text = wrapper.find('div div')

    expect(text.length).toBe(0);
  });

  it("Expects to find button HTML element with className test in the DOM", () => {
    const wrapper = shallow(<Dropdown btnName="test"/>)
    expect(wrapper.find('button')).toHaveLength(1);
  });

it("Expects to find button HTML element in the DOM", () => {
    const wrapper = shallow(<Dropdown btnName="test"/>)
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it("close-div-btna", () => {
    const mockCallBackClick = jest.fn();
    const wrapper = shallow(<Dropdown setClose={mockCallBackClick}/>);
    wrapper.find('#close-div-btn');

    expect(mockCallBackClick.mock.calls.length).toEqual(0);
  });

});
