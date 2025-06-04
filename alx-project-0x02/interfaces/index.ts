export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
    onClose: () => void;
    isOpen: boolean;
    onSubmit: (title: string, content: string) => void;
}