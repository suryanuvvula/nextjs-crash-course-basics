import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const mockUsers = async () => {

    const authObj = await auth();
    const userObj = await currentUser();

    console.log({ authObj, userObj });
    const response = await fetch("https://676c77c70e299dd2ddfcde84.mockapi.io/users");
    const users = await response.json();

    const addUser = async (formData: FormData) => {
        "use server";
        const name = formData.get("name");
        const res = await fetch("https://676c77c70e299dd2ddfcde84.mockapi.io/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name})
        });
        const newUser = await res.json();
        revalidatePath("/mock-users");
        console.log(newUser);
    }
    return (
        <div>
            <form action={addUser} className="mb-4">
                <input type="text" name="name" required className="border p-2 mr-2 rounded"></input>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add User</button>
            </form>
        <ul className="space-y-4 p-4">
            {users.map((user: any) => (
                <li className="p-4 bg-gray shadow-md rounded-lg text-gray-700" key={user.id}>{user.id}) {user.name}</li>
            ))}
        </ul>
        </div>
    )
}

export default mockUsers;