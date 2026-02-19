import { newE2EPage } from '@stencil/core/testing';

describe('property-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<property-card></property-card>');

    const element = await page.find('property-card');
    expect(element).toHaveClass('hydrated');
  });
});
