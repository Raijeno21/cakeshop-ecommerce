export interface ProductDetailType {
  id: number;
  productName: string;
  category: string;
  price: number;
  inventoryStatus: number;
  rating: number;
  createdAt: number;
  img: string;
}
export interface CartDataType {
  id: number;
  userID: number;
  productName: string;
  productID: number;
  img: string;
  quantity: number;
  price: number;
  category: string;
  createdAt: string;
}
