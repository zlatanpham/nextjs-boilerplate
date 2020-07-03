import React from 'react';
import Link from 'next/link';
import repos from 'constants/repo';

export default () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Welcome</h1>
      <p className="text-lg mb-8">
        <a>Next Boilerplate</a> provides the basics to get a fast web app with
        NextJS. Features:
      </p>
      <ul className="list-disc list-inside">
        {repos.map((project) => (
          <li key={project}>
            <Link href="/[user]/[repo]" as={`/${project}`}>
              <a>{project}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
