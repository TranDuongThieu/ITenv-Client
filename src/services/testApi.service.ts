/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryOptions, ResponsePagination } from '../types/common';
import { get } from '../apis/index';

export const getPosts = async (queryOption: QueryOptions): Promise<ResponsePagination<any>> => {
  const data = await get(import.meta.env.VITE_APP_API_POST_GET_POSTS, {
    params: queryOption
  });
  return data as any;
};
