import { render } from '@testing-library/react';

import PostsComponent from './posts-component';

describe('PostsComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostsComponent />);
    expect(baseElement).toBeTruthy();
  });
});
