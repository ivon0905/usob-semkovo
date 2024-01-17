import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import MenuItem from '../models/MenuItem';
import MenuCategory from '../models/MenuCategory';

export const api = createApi({
    // reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:7179/api',
        credentials: 'include',
        prepareHeaders: (headers) => {
            headers.set('Accept', 'application/json');
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    tagTypes: [
        'Menu',
        'MenuCategory',
    ],
    endpoints: (builder) => ({
        getMenuItems: builder.query<MenuItem[], void>({
            query: () => '/Menu',
            providesTags: ['Menu'],
        }),
        getMenuCategories: builder.query<MenuCategory[], void>({
            query: () => '/MenuCategory',
            providesTags: ['MenuCategory'],
        }),
    }),
});

export const {
    useGetMenuItemsQuery,
    useGetMenuCategoriesQuery
} = api;