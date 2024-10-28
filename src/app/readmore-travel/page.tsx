import Header from "../components/header";

export default function Home(){
    return(
        <div className="firstcontainer">
            <Header />
            <div className="body">
                Hi everyone.
                <br />
                1. Cultural immersion experiences
                <br />
                2. Outdoor adventure activities
                <br />
                3. Food and wine tours
                <br />
                4. Solo travel safety tips
            </div>
        </div>
    )
}