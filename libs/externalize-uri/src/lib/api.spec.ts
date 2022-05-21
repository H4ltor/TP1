import { uri } from './uri';

describe('api', () => {
  it('should work', () => {
    expect(uri()).toEqual('api');
  });
});
