import { faker } from '@faker-js/faker';

export interface IProduct {
  id: string;
  name: string;
  price: string;
  image: string;
  inStock: string;
  fastDelivery: boolean;
  ratings: number;
}

export const products = [...Array(20)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  image: faker.image.imageUrl(150, 100, undefined, true),
  inStock: faker.random.numeric(7),
  fastDelivery: faker.datatype.boolean(),
  ratings: faker.datatype.number({ min: 1, max: 5}),
}));
