export type IUser = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export type UserSchema = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  listing_reviews?: [];
  user_reviews?: [];
  payment_methods?: [];
  properties?: [];
}