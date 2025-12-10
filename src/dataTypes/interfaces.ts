export interface ProductDetailType {
  id: string;
  productName: string;
  category: string;
  price: number;
  inventoryStatus: number;
  rating: number;
  createdAt?: Date;
  updatedAt?: Date;
  image: string;
}
export interface CartDataType {
  id: string;
  userID: string;
  productName: string;
  productId: string;
  image: string;
  quantity: number;
  price: number;
  inventoryStatus: number;
  category: string;
  isCheckout: boolean;
  createdAt: string;
}
export interface UserDetailsType {
  id: string;
  userID: string;
  firstName: string;
  lastname: string;
  mobileNumber: string;
  address: string;
  profileImage: string;
}

export interface WishlistType {
  id: string;
  userID: string;
  productName: string;
  productId: string;
  image: string;
  price: number;
  inventoryStatus: number;
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface OrderType {
  id: string;
  userID: string;
  productName: string;
  productId: string;
  image: string;
  quantity: number;
  price: number;
  totalPrice: number;
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
}
