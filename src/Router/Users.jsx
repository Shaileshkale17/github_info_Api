import React, { useEffect, useRef, useState } from "react";
import UserContainer from "../components/UserContainer/UserContainer";
import Loading from "../components/Loding/Loding";

function Users() {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState(null);
  let GithubAPi = "https://api.github.com/users";
  const userRef = useRef();

  const AllUsers = async () => {
    
        setLoading(true);
        try {
            const usersData = await fetch(GithubAPi);
            const data = await usersData.json();
            setUsers(data);
        } catch (error) {
            // Handle the error, you might want to log it or show a message
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
    
    
  };
  const FindUser = async () => {
    setLoading(true);
    try {
        if (userRef && userRef.current && userRef.current.value !== "") {
            const res = await fetch(GithubAPi + "/" + userRef.current.value);
            if (res.status === 404) {
                // Handle case where user is not found
                console.log("User not found");
                setUsers([]);
            } else {
                const data = await res.json();
                setUsers([data]);
                userRef.current.value = "";
            }
        } else {
            await AllUsers();
        }
    } catch (error) {
        // Handle the error
        console.error("Error fetching user:", error);
    } finally {
        setLoading(false);
    }
};

  useEffect(() => {
    AllUsers();
  }, [setUsers]);
  // console.log("data",user)
  return (
    <div>
      <div className="flex justify-center items-center h-11 my-5">
        <input
          type="text"
          placeholder="Search github username..."
          className="h-full md:w-1/3 w-2/3 text-gray-800 px-2 font-semibold outline-none"
          ref={userRef}
        />
        <button
          className="bg-teal-500 font-semibold px-4 h-full"
          onClick={() => FindUser()}>
          {" "}
          Search
        </button>
      </div>
      {loading ? <Loading /> : <UserContainer user={user} />}
    </div>
  );
}

export default Users;
