type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

const UsersServer = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const api = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(api);
    const users = await response.json();

    return (
        <ul className="space-y-4 p-4">
            {users.map((user: User) => (
                <li className="p-4 bg-gray shadow-md rounded-lg text-gray-700" key={user.id}>{user.name} ({user.email})</li>
            ))}
        </ul>
    )
}

export default UsersServer;