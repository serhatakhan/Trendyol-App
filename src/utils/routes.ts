// enum tanımlandığında, TypeScript otomatik olarak her bir enum üyesinin tipini belirler.
export enum Routes {
  PRODUCT_DETAIL = 'Ürün Detay',
  PRODUCT_LIST = 'Ürünler',
  TAB = 'Trendyol'
}
const HOME_SCREEN: string = 'Anasayfa';
const TRENDYOLGO_SCREEN: string = 'Trendyol GO';
const FAVORITES_SCREEN: string = 'Favoriler';
const CART_SCREEN: string = 'Sepetim';
const PROFILE_SCREEN: string = 'Hesabım';

export {
  HOME_SCREEN,
  TRENDYOLGO_SCREEN,
  FAVORITES_SCREEN,
  CART_SCREEN,
  PROFILE_SCREEN,
};
