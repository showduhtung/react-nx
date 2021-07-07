import { render } from '@testing-library/react';
import ProductsFeatureGameDetail from './products-feature-game-detail';
describe('ProductsFeatureGameDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductsFeatureGameDetail />);
    expect(baseElement).toBeTruthy();
  });
});
