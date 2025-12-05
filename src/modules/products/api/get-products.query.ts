import type { AxiosResponse } from 'axios';

import { axiosClient } from '@configs/services';
import type { ProductEntity } from '@core/product.entity';

export const getProducts = async () => {
  const { data }: AxiosResponse<ProductEntity[]> = await axiosClient.get('/products');

  return data;
};
