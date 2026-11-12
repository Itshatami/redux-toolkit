import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";

function Users() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>Users</h2>
      {users.loading ? <h3>Loading...</h3> : null}
      {users.users.length ? users.users.map((user) => <p>{user.username}</p>) : null}
    </div>
  );
}

export default Users;
