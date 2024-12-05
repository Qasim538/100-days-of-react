import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Features/UserDataSlice";
import "./Home.css"; // Importing the CSS file

const Home = () => {
    const data = useSelector((state) => state.app); // Matches the "app" key in store
    console.log("data", data);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(getUser());
    };

    return (
        <div className="container">
            <h1>User List</h1>
            <button className="fetch-button" onClick={handleClick}>
                Fetch Users
            </button>
            {data.loading && <p className="loading">Loading...</p>}
            {data.error && <p className="error">Error: {data.error}</p>}
            {data.users.length > 0 && (
                <ul className="user-list">
                    {data.users.map((user) => (
                        <li key={user.id} className="user-item">
                            <h3>{user.name}</h3>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Website: {user.website}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Home;
