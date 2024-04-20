export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount_price: number;
  discount_percent: number;
  is_new: boolean;
  image_link: string;
  other_images_link: string; // Vai ser um array posteriormente
}
