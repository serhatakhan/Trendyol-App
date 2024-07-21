import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/requests';
import {BEST_SELLER_PRODUCTS_URL, CATEGORY_URL, NEW_ARRIVAL_PRODUCTS_URL} from '../../service/urls';
import {Product} from '../slice/productSlice';

// params parametresinin yapısını tanımladık
interface GetProductsParams {
  category: string;
}

const getProducts = createAsyncThunk<Product[],GetProductsParams,{rejectValue: {error: string}}>(
  'products/getProducts', async (params:GetProductsParams, {rejectWithValue}) => {
  try {
    const res = await getRequest<Product[]>(`${CATEGORY_URL}/${params.category}`, params); // getRequest bizden 2 parametre istiyor diye 2.sini boş obje yolladık ve getRequest, Product[] döndürecek dedik dinamik yaptık!   
    return res.data;
  } catch (error) {
    return rejectWithValue({error: (error as Error).message});
  }
});

const getNewArrivalProducts = createAsyncThunk<Product[],object,{rejectValue: {error: string}}>(
  'products/getNewArrivalProducts', async (params:object, {rejectWithValue}) => {
  try {
    const res = await getRequest<Product[]>(NEW_ARRIVAL_PRODUCTS_URL, params); 
    return res.data;
  } catch (error) {
    return rejectWithValue({error: (error as Error).message});
  }
});

const getBestSellerProducts = createAsyncThunk<Product[],object,{rejectValue: {error: string}}>(
  'products/getBestSellerProducts', async (params:object, {rejectWithValue}) => {
  try {
    const res = await getRequest<Product[]>(BEST_SELLER_PRODUCTS_URL, params); 
    return res.data;
  } catch (error) {
    return rejectWithValue({error: (error as Error).message});
  }
});

export {getProducts, getNewArrivalProducts, getBestSellerProducts};
/**
 * createAsyncThunk<Product[], void, {rejectValue: {error: string}}>:
 * Bu fonksiyon, bir async thunk oluşturur.
 >>> İlk tip argümanı Product[]: Thunk'ın başarılı bir şekilde tamamlanması durumunda dönecek verinin tipi.
 >>> İkinci tip argümanı void: Thunk'ın argümanlarının tipi (burada herhangi bir argüman beklenmiyor). [limit parametresi yolladığımız için void'i object diye değiştirdik !!!]
 >>> Üçüncü tip argümanı {rejectValue: {error: string}}: Thunk'ın başarısız olması durumunda dönecek hata mesajının tipi.

 * async (_, {rejectWithValue}) => {...}: Async fonksiyon tanımı. İki parametre alır:
 >>> İlk parametre (_): Bu parametre genellikle işlev tarafından kullanılmayan veya önemli olmayan bir değeri temsil eder. [parametre verdik daha sonra. o yüzden _ yerine params:object yazdık !!!]
 >>> İkinci parametre ({rejectWithValue}): Bu parametre, Redux Toolkit tarafından sağlanan ve hata durumunda özel bir değer ile reddetme işlemi yapmamızı sağlayan bir fonksiyondur.

 * return rejectWithValue({error: (error as Error).message}):
 >>> error değişkeni Error tipine dönüştürülür (as Error).
 >>> rejectWithValue fonksiyonu kullanılarak hata mesajı özel bir formatta ({error: string}) geri döndürülür.
 */

//  NOT: Neden _ Kullandık?
// * 1. Parametre Kullanılmadığında:
// * createAsyncThunk fonksiyonuna sağlanan async fonksiyonun ilk parametresi, thunk'ın çağrıldığı yerden gelen argümanları alır. Ancak bu durumda, async thunk herhangi bir argüman beklemez ve kullanmaz. 
// Bu yüzden bu parametre gereksizdir. Ancak, JavaScript/TypeScript'te bir fonksiyon tanımlarken belirli bir parametreyi kullanmasanız bile, bu parametreyi yine de belirtmeniz gerekebilir. Bu durumda, bu gereksiz parametreyi belirtmek için _ kullanılır.