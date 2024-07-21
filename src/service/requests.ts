import { AxiosResponse } from 'axios';
import {Client} from './instance';

// Generics kullanarak tip parametresini belirledik !
/**
 * getRequest fonksiyonunu hem ürünleri almak için hem kategorileri almak için kullandık.
 * Fakat ürünlerin tipi Product[], kategorilerin tipi string[]. yani birbirinden farklı.
 * Ondan dolayı generic kullandık. böylelikle fonksiyonunun tipini parametre olarak alacağı veri türüne göre dinamik olarak ayarladık !
 * Nasıl dinamik oluyor. burada böyle. sonra fonksiyonun çağırıldığı yerde (actionslarda) fonksiyonun tipini yazıyoruz.
 */
export async function getRequest<T>(URL: string, params: object): Promise<AxiosResponse<T>> {
  const res: AxiosResponse<T> = await Client.get(URL, { params });
  return res;
}

