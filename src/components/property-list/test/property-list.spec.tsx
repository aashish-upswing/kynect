import { newSpecPage } from '@stencil/core/testing';
import { PropertyList } from '../property-list';

describe('property-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PropertyList],
      html: `<property-list></property-list>`,
    });
    expect(page.root).toEqualHtml(`
      <property-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </property-list>
    `);
  });
});
