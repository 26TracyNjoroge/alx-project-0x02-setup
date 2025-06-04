import { type CardProps } from "@/interfaces";
import React from "react";

const Card: React.FC<CardProps> = ({title, content}) => {
    return (
        <div className="border rounded m-3 text-center">
            <h1 className="p-4 text-red-500">{title}</h1>
            <p className="p-4">{content}</p>
        </div>
    )
}
export default Card;