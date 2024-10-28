import Header from "../components/header";

export default function Home(){
    return(
        <div className="firstcontainer">
            <Header />
            <div className="body">
                Hi everyone.
                <br />
                1. Smartphone photography tips
                <br />
                2. AI and machine learning explained
                <br />
                3. Cybersecurity best practices
                <br />
                4. Gadget reviews and comparisons
            </div>
        </div>
    )
}