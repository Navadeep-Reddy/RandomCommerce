export interface Product {
  id: number;
  price: number;
  name: String;
  description: String;
  category: String;
  releaseDate: String;
  availability: boolean;
  quantity: number;
}

export interface inputProduct {
  price: number;
  name: string;
  description: string;
  category: string;
  releaseDate: string;
  availability: boolean;
  quantity: number;
}
