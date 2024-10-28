import Header from "../components/header";

export default function Home(){
    return(
        <div className="firstcontainer">
            <Header />
            <div className="body">
                Hi everyone.
                <br />
                1. Coffee brewing methods
                <br />
                2. Restaurant reviews
                <br />
                3. Food and wine pairing guide
                <br />
                4. Healthy snack ideas
            </div>
        </div>
    )
}