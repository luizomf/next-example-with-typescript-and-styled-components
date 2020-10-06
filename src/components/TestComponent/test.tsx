import { screen } from '@testing-library/react';
import { TestComponent } from '.';
import { customRender } from '../../utils/custom-render';

describe('<TestComponent />', () => {
  it('should render the test component', () => {
    customRender(<TestComponent>Oi</TestComponent>);
    expect(screen.getByRole('heading', { name: 'Oi' })).toHaveStyleRule(
      'background',
      '#0070f3',
    );
  });
});
