import type { IUserAccount } from "./userAccount";

export const UserList = ({ users }: { users: IUserAccount[] }) => {
    if (users.length === 0) {
        return <div>No Users Found</div>
    }

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}> 
                        <a href={`#${user.id}`}>{user.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
};