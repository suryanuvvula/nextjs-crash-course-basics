"use client";
import { useEffect, useState } from "react"

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

const UsersClient = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const api = 'https://jsonplaceholder.typicode.com/users';
                const users = await fetch(api);
                if(!users.ok) throw new Error("Failed to fetch users");
                const data = await users.json();
                setUsers(data);
            } catch (error) {
                setError("Failed to fetch users");
                if(error instanceof Error) {
                    setError(`Failed to fetch users: ${error.message}`)
                }
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);

    if(loading) return <div>Loading...</div>
    if(error) return <div>{error}</div>

    return (
       <ul className="space-y-4 p-4">
        {users.map((user: User) => (
            <li className="p-4 bg-gray shadow-md rounded-lg text-gray-700" key={user.id}>{user.name} ({user.email})</li>
        ))}
       </ul>
    )
}

export default UsersClient;