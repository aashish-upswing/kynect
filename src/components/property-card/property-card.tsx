import { Component, Host, h, Prop } from '@stencil/core';
import { Property } from '../../utils/data';
import { StarIcon, ArrowIcon } from './assets/icons';

@Component({
  tag: 'property-card',
  styleUrl: 'property-card.css',
  shadow: true,
})
export class PropertyCard {
  /**
   * The property object to display
   */
  @Prop() item!: Property;

  render() {
    const property = this.item;

    if (!property) {
      return null;
    }

    return (
      <Host>
        <div class="card">
          <img class="card-image" src={property.image} alt={property.title} />
          <div class="card-content">
            <div class="card-header">
              <h3 class="card-title">{property.title}</h3>
              <div class="card-rating">
                <StarIcon />
                <span class="rating-value">{property.rating}</span>
              </div>
            </div>
            <div class="card-body">
              <p class="card-location">{property.location}</p>
              <p class="card-description">{property.description}</p>
            </div>
            <div class="card-footer">
              <span class="card-price">${property.price}/night</span>
              <button class="card-button">
                View Details
                <ArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
