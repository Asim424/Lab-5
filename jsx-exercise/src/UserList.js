import "./users.js";
import users from "./users.js";
// Create a UserList component in src/UserList.js.
// o Import users into UserList.js
// o Use .map() to render each user
// o For each user, render the following structure:
/* <article>
<h3>{user.first_name}</h3>
<p>User Group: {user.user_group}</p> 
<p>ID: {user.id}</p>
</article>*/
function UserList() {
    return (
        <div>
            {users.map(user => (
                <article key={user.id}>
                    <h3>{user.first_name}</h3>
                    <p>User Group: {user.user_group}</p>
                    <p>ID: {user.id}</p>
                </article>
            ))}
        </div>
    );
}

export default UserList;