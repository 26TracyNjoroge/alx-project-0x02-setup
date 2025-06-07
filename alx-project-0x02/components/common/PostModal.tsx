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
        <div className="bg-black bg-opacity-50 flex items-center justify-center p-5">
            <div className="bg-gray-800 p-6 rounded-md text-center">
                <h2 className="mb-5 text-xl">Add New Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 w-96 flex justify-around">
                        <label className="">Title</label>
                        <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} className="p-2 ml-9 border border-gray-300" placeholder="Enter post title" required/>
                    </div>

                    <div className="mb-4 w-96 flex justify-around">
                        <label className="mt-2">Content</label>
                        <textarea value={content} onChange={(e)=> setContent(e.target.value)} className="p-2 border border-gray-300" placeholder="Enter post Content" required/>
                    </div>
                    
                    <div className="flex justify-end space-x-2">
                        <button type="button" onClick={onClose} className="" >Cancel</button>
                        <button type="submit" className="bg-blue-500 text-white rounded hover:bg-blue-600 px-2 py-1" >Add Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PostModal;