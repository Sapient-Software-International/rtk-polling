import { render } from '@testing-library/react';

import PostItemComponent from './post-item-component';

describe('PostItemComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostItemComponent />);
    expect(baseElement).toBeTruthy();
  });
});
