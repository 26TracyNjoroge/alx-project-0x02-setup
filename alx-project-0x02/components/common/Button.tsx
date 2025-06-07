import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, size, shape, onClick }) => {

    return (
        <button className={`bg-green-600 hover:bg-green-700 px-4 py-2 text white ${size} ${shape} `} onClick={onClick} >
            {title}
        </button>
    )
}
export default Button;