import Search from '../search/Search';
import Pagination from '../pagination/Pagination';
import UserList from './user-list/UserList';
import { useEffect, useState } from 'react';
import UserAdd from './user-add/UserAdd';
import UserDetails from './user-details/UserDetails';
import UserDelete from './user-delete/UserDelete';
const baseUrl = 'http://localhost:3030/jsonstore';

export default function UserSection() {
    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);
    const [showUserDetailsById, setShowUserDetailsById] = useState(null);
    const [showUserDeleteById, setShowUserDeleteById] = useState(null);
    useEffect(() => {
        (async function getUsers() {
            try {
                const response = await fetch(`${baseUrl}/users`);
                const result = await response.json();
                const userResult = Object.values(result);

                setUsers(userResult);
            } catch (error) {
                console.log('User section error ' + error);
            }
        })();

        // getUsers();
    }, []);

    const addUserClickHandler = () => {
        setShowAddUser(true);
    };
    const addUserCloseHandler = () => {
        setShowAddUser(false);
    };
    const addUserSaveHandler = async (e) => {
        //prevent refresh
        e.preventDefault();

        // get all data
        const formData = new FormData(e.currentTarget);
        const userData = {
            ...Object.fromEntries(formData),
            updatedAt: new Date().toISOString(),
            createdAt: new Date().toISOString(),
        };

        const response = await fetch(`${baseUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const createdUser = await response.json();
        console.log(createdUser);

        setUsers((oldUser) => [...oldUser, createdUser]);
        setShowAddUser(false);
    };

    const userDetailsClickHandler = (userId) => {
        setShowUserDetailsById(userId);
    };

    const userDeleteClickHandler = (userId) => {
        console.log(userId);
        setShowUserDeleteById(userId);
    };

    const userDeleteHandler = async (userId) => {
        console.log(userId);
        await fetch(`${baseUrl}/users/${userId}`, {
            method: 'DELETE',
        });

        setUsers((oldUser) => oldUser.filter((user) => user._id !== userId));
        setShowUserDeleteById(null);
    };
    return (
        <section className="card users-container">
            <Search />

            <UserList
                users={users}
                onUserDetailsClick={userDetailsClickHandler}
                onUserDeleteClick={userDeleteClickHandler}
            />

            {showAddUser && (
                <UserAdd
                    onClose={addUserCloseHandler}
                    onSave={addUserSaveHandler}
                />
            )}
            {showUserDetailsById && (
                <UserDetails
                    user={users.find(
                        (user) => user._id === showUserDetailsById
                    )}
                    onClose={() => setShowUserDetailsById(null)}
                />
            )}
            {showUserDeleteById && (
                <UserDelete
                    onClose={() => setShowUserDeleteById(null)}
                    onUserDelete={() => userDeleteHandler(showUserDeleteById)}
                />
            )}
            {/* New user button  */}
            <button className="btn-add btn" onClick={addUserClickHandler}>
                Add new user
            </button>
            {/* Pagination component  */}
            <Pagination />
        </section>
    );
}
