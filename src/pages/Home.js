import React, {useContext, useEffect} from 'react';
import NavBar from "../components/NavBar";
import {Context} from "../index";
import {fetchContacts} from "../http/UsersService";
import {observer} from "mobx-react-lite";

const Home = observer(() => {

    const {users} = useContext(Context);

    useEffect(() => {
        fetchContacts().then(data => {
            users.setUsers(data.results);
        })
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <NavBar/>
            <div className="container ">
                <div className="card pt-3 pb-5 px-2">
                    <h3>Список контактов</h3>
                    {users.getUsers.map(user =>
                        <p key={user.id}>
                            {user.client_name}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
});

export default Home;