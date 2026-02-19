import { newE2EPage } from '@stencil/core/testing';

describe('property-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<property-list></property-list>');

    const element = await page.find('property-list');
    expect(element).toHaveClass('hydrated');
  });
});
