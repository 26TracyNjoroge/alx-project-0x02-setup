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