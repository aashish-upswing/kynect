export interface Property {
  id: string;
  image: string;
  title: string;
  location: string;
  description: string;
  price: number;
  rating: number;
}

export const propertyData: Property[] = [
  {
    id: '1',
    image: 'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=414x232',
    title: 'Hagia Sofia Mansions Istanbul, Curio Collection by Hilton',
    location: 'Istanbul',
    description: 'For a blend of modern luxury and historic charm, this hotel is just 0.2 km from the Blue Mosque.',
    price: 120,
    rating: 4.8,
  },
];
