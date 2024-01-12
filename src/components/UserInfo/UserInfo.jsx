import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Table from "../Table/Table";
import Repo from "../Repo/Repo";
import Events from "../Events/Events";
import UserContainer from "../UserContainer/UserContainer";
// import { info } from "autoprefixer";
// import Loading from "../Loding/Loding";

function UserInfo() {
  const [user, setUser] = useState([]);
  const [type, settype] = useState("repos");
  const [infos, setinfos] = useState([]);
// const [loading, setloading] = useState(null);
  const { pathname } = useLocation();


  const navigate = useNavigate();
  let GithubAPi = "https://api.github.com/users";

  const getUserInfo = async () => {
    
    try {
      const usersData = await fetch(GithubAPi + pathname);
      const data = await usersData.json();
      setUser(() => [data]);
      
    } catch (error) {
      // Handle the error, you might want to log it or show a message
      console.error("Error fetching users:", error);
    }
  };
  const getUrls = async () => {
    
    try {
      // Assuming you have defined pathname and type somewhere in your code
      // Replace with the actual value

      const usersData = await fetch(GithubAPi + pathname + `/${type}`);
      const data = await usersData.json();
      setinfos(data);
      // console.log("fskngklj",data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getUserInfo();
    getUrls();
  }, [pathname, settype]);

  return (
    <div className="py-5">
      <button
        onClick={() => navigate("/")}
        className="px-5 py-1 font-medium mx-1 my-4 bg-teal-600 rounded text-gray-200">
        BACK
      </button>
      <>
        {user.map((userData, i) => (
          <div
            key={i}
            className="flex justify-center md:flex-row md:px-0 px-4 flex-col gap-10">
            <img
              src={userData.avatar_url}
              className="w-[350px] border-4 border-teal-400 md:mx-0 mx-auto"
            />
            <div className="text-lg px-3 loading-10">
              <h1 className="text-3xl pb-4">{userData?.name}</h1>
              <h2 className="text-3xl pb-4">
                <span className="text-teal-400">Login Name : </span>
                {userData?.name}
              </h2>
              <h2 className="text-3xl pb-4">
                <span className="text-teal-400">Followers : </span>
                {userData?.followers}
              </h2>
              <h2 className="text-3xl pb-4">
                <span className="text-teal-400">Following : </span>
                {userData?.following}
              </h2>
              <h2 className="text-3xl pb-4">
                <span className="text-teal-400">Public Repositories : </span>
                {userData?.public_repos}
              </h2>
              <h2 className="text-3xl pb-4">
                <span className="text-teal-400">Join : </span>
                {new Date(userData?.created_at).toLocaleDateString()}
              </h2>
              <h2 className="text-3xl pb-4">
                <span className="text-teal-400">Last updated : </span>
                {new Date(userData?.updated_at).toLocaleDateString()}
              </h2>
              <a
                href={userData.html_url}
                className="text-gray-200 font-semibold rounded cursor-pointer px-4 py-1 bg-teal-600 my-3
              tracking-wide"
                target="_blank">
                Visit
              </a>
            </div>
          </div>
        ))}
        {/* <div className="flex border-b bp-4 gap-6 mt-[10%] mb-6 justify-center md:text-xl">
        </div> */}
        <Table type={type} settype={settype} />
        
        {type === "repos" && (
          <div>
            {type === "repos" && (
              <div className="grid md:grid-cols-2 grid-cols-1 gap-7 w-10/12 mx-auto">
                {infos && <Repo repos={infos} />}
              </div>
            )}
          </div>
        )}
        {type === "received_events" && (
          <div>{infos && <div className="grid md:grid-cols-2 grid-cols-1 gap-7 w-10/12 mx-auto"><Events events={infos} /></div>}</div>
        )}
        {type === "followers" && (
          <div>
            <UserContainer user={infos} />
          </div>
        )}
      </>
    </div>
  );
}

export default UserInfo;
