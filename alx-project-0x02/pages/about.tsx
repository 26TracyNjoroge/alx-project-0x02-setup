import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const About: React.FC = () => {
    return (
        <div>
            <Header/>
            <main>
                <h1>About us</h1>
                <div className="flex flex-wrap gap-4 items-center">
                    <Button 
                        title="Small Rounded" 
                        size="small" 
                        shape="rounded-sm"
                        onClick={() => console.log('Small button clicked')}
                    />
                    
                    <Button 
                        title="Medium Rounded" 
                        size="medium" 
                        shape="rounded-md"
                        onClick={() => console.log('Medium button clicked')}
                    />
                    
                    <Button 
                        title="Large Full Rounded" 
                        size="large" 
                        shape="rounded-full"
                        onClick={() => console.log('Large button clicked')}
                    />
                </div>
            </main>
        </div>
    )
};

export default About;