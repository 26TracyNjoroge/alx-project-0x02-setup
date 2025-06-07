import { type CardProps } from "@/interfaces";
import React from "react";

const Card: React.FC<CardProps> = ({title, content}) => {
    return (
        <div className="border rounded m-2  mb-3 text-center w-full">
            <h1 className="p-3 text-green-500">{title}</h1>
            <p className="p-3">{content}</p>
        </div>
    )
}
export default Card;