import { ReactNode } from "react";

/* 
    Random type
*/


export interface ContainerProps { 
    children?: ReactNode;
    className?: string;
}

export interface ButtonProps { 
    children?: ReactNode;
    onClick?: () => void;
}

/* 
    ZOD & React Hook Form type
*/

import { FieldError, UseFormRegister } from "react-hook-form";

/* Form Data Types */
export interface BaseFormData {
  username: string;
  email: string;
  companyName: string;
  companyCategories: string;
  yearsOfExperience: number; 
  password: string;
  confirmPassword: string;
}

export type SignUpFormData = BaseFormData;

export interface SignInFormData {
  identifier: string;
  password: string;
  confirmPassword: string;
}

export type SignUpValidFieldNames = keyof SignUpFormData;
export type SignInValidFieldNames = keyof SignInFormData;

export type OptionType = {
  label: string;
  value: string;
};

export type SignUpFormFieldProps = { 
  type?: string;
  name: SignUpValidFieldNames;
  register: UseFormRegister<SignUpFormData>;
  inputId?: string;
  labelText?: string;
  error: FieldError | FieldError[] | undefined;
  valueAsNumber?: boolean;
  options?: OptionType[];
  multiple?: boolean;
}

export type SignInFormFieldProps = { 
  type?: string;
  name: SignInValidFieldNames;
  register: UseFormRegister<SignInFormData>;
  inputId?: string;
  labelText?: string;
  error: FieldError | FieldError[] | undefined;
  valueAsNumber?: boolean;
  options?: OptionType[];
  multiple?: boolean;
}

/* 
    Lazy Load Images Type
*/

export type LazyLoadImageType = {
    src?: string | undefined;
    alt?: string | undefined;
    className?: string | undefined;
}