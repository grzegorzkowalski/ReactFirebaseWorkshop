import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <ul style={{
            display: 'flex',
        }}>
            <li style={{ paddingRight: '15px'}}>
                <Link to="/">Home</Link>
            </li>
            <li style={{ paddingRight: '15px'}}>
                <Link to="/o-nas">O nas</Link>
            </li>
            <li><Link to="/kontakt">Kontakt</Link></li>
        </ul>
    );
};

export default Navigation;
