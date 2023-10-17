export class ProductModel {
  _id: string;
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  credit: number;
  calculatedRating: number;
  decription: string;
  advantages: string;
  disAdvantages: string;
  ctegories: string[];
  tags: string;
  characteristics: {
    [key: string]: string;
  };
}
