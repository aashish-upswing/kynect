import { newSpecPage } from '@stencil/core/testing';
import { PropertyCard } from '../property-card';

describe('property-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PropertyCard],
      html: `<property-card></property-card>`,
    });
    expect(page.root).toEqualHtml(`
      <property-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </property-card>
    `);
  });
});
