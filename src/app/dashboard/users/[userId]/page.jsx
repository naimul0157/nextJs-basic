export const instant = false

const UserDetails = async ({params}) => {
    const {userId} = await params;
    const userData = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user = await userData.json();
    console.log(user);
    return (
        <div>
            {user.name}
        </div>
    );
};

export default UserDetails;