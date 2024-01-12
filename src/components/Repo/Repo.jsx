import React from "react";

function Repo({ repos }) {
  return (
    <>
      {repos.map((repo, i) => (
        <div key={i} className="bg-gray-900 p-3 leading-8">
          <a
            href={repo.html_url}
            target="_blank"
            className="text-teal-500 break-words font-semibold hover:underline">
            {repo.full_name}
          </a>
          <div className="flex gap-x-5">
            <h1 className="text-sm font-semibold">
              {"🟢" + repo.language}
            </h1>
            <h1 className="text-sm fon-semibold">Forks : {repo.forks}</h1>
            <h1 className="text-sm fon-semibold">
              Stars : {repo.stargazers_count}
            </h1>
          </div>
        </div>
      ))}
    </>
  );
}

export default Repo;
