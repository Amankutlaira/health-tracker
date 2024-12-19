import { Link } from "react-router-dom"

const Navbar=()=>{
    return(
        <div style={{height:"50px",backgroundColor:"royalblue",display:"flex",justifyContent:"space-around"}}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <Link to="/">Cards</Link>
                <Link to="/profile">Profile</Link>
            </div>
            <div>
                <Link to="/schedule">Schedule</Link>
                <Link to="/renewal">Renewal</Link>
                <Link to="/analytics">Analytics</Link>
                <Link to="/assistance">Assistance</Link>
                <Link to="/history">History</Link>
            </div>
        </div>
    )
}

export default Navbar