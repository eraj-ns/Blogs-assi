import Header from "../components/header";

export default function Home(){
    return(
        <div className="firstcontainer">
            <Header />
            <div className="body">
                Hi everyone.
                <br />
                1. Mental health awareness
                <br />
                2. Nutrition and meal planning
                <br />
                3. Self-care practices
                <br />
                4. Productivity hacks for work-life balance
            </div>
        </div>
    )
}