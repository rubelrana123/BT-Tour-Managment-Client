import type { ComponentType } from 'react';

export type { ISendOtp, IVerifyOtp, ILogin }  from './auth.type';
export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export   interface ISliderItem {
 
  title: string
  items: { 
    title: string
    url: string
    Component: ComponentType;
  }[]
}
export type TRole = 'ADMIN' | 'Super_ADMIN' | 'USER';