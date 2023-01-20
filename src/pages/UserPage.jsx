import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {

    const params = useParams();

    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then((response) => response.json())
        .then((data) => setUser(data));
    },[]);

    console.log(user);

    return(
        <p>{user.name} - {user.email} - {user.website} - {user.username} - {user?.address?.city}</p>
    )
}

export default UserPage;