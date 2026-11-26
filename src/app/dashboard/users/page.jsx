import Link from "next/link";

export const instant = false
export const metadata = {
    title: "Dashboard",
    description: "This is about dahsboard",
};
const UserDashboard = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json();
    // console.log(users);
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-5 m-5">
                {users.map(user =>
                    <div key={user.id} className="card bg-primary text-primary-content w-96">
                        <div className="card-body">
                            <h2 className="card-title">{user.name}</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                                <Link href={`users/${user.id}`}><button className="btn">Buy Now</button></Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserDashboard;