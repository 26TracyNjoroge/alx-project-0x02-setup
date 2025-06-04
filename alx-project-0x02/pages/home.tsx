import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";
import { CardProps } from "@/interfaces";

const Home: React.FC = () => {
    const welcomeTitle = "Welcome to our Application!";
    const welcomeContent = "We're glad you're here. Explore and enjoy your experience.";

    return (
        <div>
            <Header/>
            <main>
                <h1>Welcome to our home page.</h1>
                <Card title={welcomeTitle} content={welcomeContent}/>
            </main>
        </div>
    )
}
export default Home;