import { render, screen } from '@testing-library/react';
import App from './App';
import Login from './Login';
import BucketList from './BucketList';

test('renders login here', () => {
  render(<Login />)
  const loginHere = screen.getByText('Login Here')
  expect(loginHere).toBeInTheDocument()
})

test('renders Tick off Bucket List', () => {
  render(<BucketList />)
  const bucketList = screen.getByText('Add to Bucket List')
  expect(bucketList).toBeInTheDocument();
})
