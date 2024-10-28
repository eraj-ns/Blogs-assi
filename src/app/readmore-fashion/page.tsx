import Header from "../components/header";
import Image from "next/image";

export default function Home(){
    return(
        <div className="firstcontainer">
            <Header />
            <div className="body">
                Hi everyone.
                <br />
                1. Skincare routines for different skin types
                <br />
                2. Makeup tutorials for beginners
                <br />
                3. Fashion trends for each season
                <br />
                4. Product reviews for beauty and fashion
            </div>
        </div>
    )
}