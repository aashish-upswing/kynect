import { Component, Host, h } from '@stencil/core';
import { propertyData } from '../../utils/data';

@Component({
  tag: 'property-list',
  styleUrl: 'property-list.css',
  shadow: true,
})
export class PropertyList {
  render() {
    return (
      <Host>
        <div class="list-container">
          {propertyData.map((property, index) => (
            <div class="list-item">
              <property-card item={property}></property-card>
              {index < propertyData.length - 1 && <div class="separator"></div>}
            </div>
          ))}
        </div>
      </Host>
    );
  }
}
