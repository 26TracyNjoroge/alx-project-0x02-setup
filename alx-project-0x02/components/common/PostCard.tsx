import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({title, content, userId}) => {
    return (
        <div className="border rounded-lg p-6">
            <div>
                <h2 className="text-green-700 text-xl mb-5">{title}</h2>
                <div>
                    <span>
                        User {userId}
                    </span>
                </div>
            </div>

            <div className="">
                <p>{content}</p>
            </div>
            
            <div className="mt-4 pt-4">
                <div className="flex items-center justify-between">
                    <button className="text-blue-600">
                        Read More
                    </button>
                    
                    <div className="flex space-x-4 text-sm text-gray-500">
                        <button className="hover:text-gray-700 transition-colors duration-200">
                            Like
                        </button>
                        <button className="hover:text-gray-700 transition-colors duration-200">
                            Share
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default PostCard;