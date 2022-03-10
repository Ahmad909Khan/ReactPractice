import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="bg-info p-3 text-center">
            <div className="col-sm-7 mx-auto clearfix">
                <h1>Groceries Management System</h1>
                <div className="float-start">
                    <Link className="text-dark" to='/'>Home</Link>
                </div>
                <div className="float-end">
                    <Link className="text-dark" to='/about-us'>About Us</Link>
                </div>
            </div>

        </div>
    )
}

export default Header;