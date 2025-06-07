import { PostModalProps } from "@/interfaces";
import { useState } from "react";

const PostModal: React.FC<PostModalProps> = ({ onClose, isOpen, onSubmit }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (title.trim() && content.trim()) {
            onSubmit({title, content});
            setTitle("");
            setContent("");
            onClose();
        }

    }

    if (!isOpen) return null;

    return (
        <div className="bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6">
                <h2>Add New Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="">Title</label>
                        <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} className="p-2 border-gray-300" placeholder="Enter post title" required/>
                    </div>

                    <div className="mb-4">
                        <label className="">Content</label>
                        <textarea value={content} onChange={(e)=> setContent(e.target.value)} className="p-2 border-gray-300" placeholder="Enter post Content" required/>
                    </div>
                    
                    <div className="flex justify-end space-x-2">
                        <button type="button" onClick={onClose} className="" >Cancel</button>
                        <button type="submit" className="bg-blue-500 text-white rounded hover:bg-blue-600" >Add Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PostModal;