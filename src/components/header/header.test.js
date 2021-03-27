import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Header from './header'
describe('Header', () => {
  test('should render header Link', () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
