export const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
]

export async function GET(request: Request, { params }: { params : { id: string} }) {
    const { id } = await params;
    const user = users.find(user => user.id === Number(id));
    return Response.json(user);
}