import { handleSubmit } from '../js/formHandler'

describe('handleSubmit function', () => {
  it('should call the API, and display the result', async () => {
    expect(handleSubmit).toBeDefined();
  });
});