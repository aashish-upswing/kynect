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
  {
    id: '2',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/370564672.jpg?k=4f37af06c05a6f5dfc7db5e8e71d2eb66cae6eec36af7a4a4cd7a25d65ceb941&o=',
    title: 'The Magnaura Palace Hotel',
    location: 'Istanbul',
    description: 'Stay in a restored Ottoman mansion just 0.2 km from the Blue Mosque.',
    price: 126,
    rating: 4.3,
  },
  {
    id: '3',
    image: 'https://digital.ihg.com/is/image/ihg/ihgor-member-rate-web-offers-1440x720?fit=crop,1&wid=1440&hei=720',
    title: 'The Magnaura Palace Hotel',
    location: 'Istanbul',
    description: 'Stay in a restored Ottoman mansion just 0.2 km from the Blue Mosque.',
    price: 126,
    rating: 4.3,
  },
];
