import { ReactNode } from "react";

export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
    onClose: () => void;
    isOpen: boolean;
    onSubmit: (data: { title: string; content: string }) => void;
}

export interface ButtonProps {
    title: string;
    size: 'small' | 'medium' | 'large';
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    onClick?: () => void;
}

export interface PostProps {
    title: string;
    content: string;
    userId: string;
    id?: number;
}

export interface ApiProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}


export interface Post {
  title: string;
  content: string;
}