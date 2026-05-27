export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export type ProductCardProps =  {
  product: Product
}


export type RequestBody = {
  text: string;
  target: string;
};

export type TranslationResponse = {
  translatedText: string;
};