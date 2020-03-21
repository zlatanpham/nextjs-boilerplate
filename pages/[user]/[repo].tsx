import React from 'react';
import Link from 'next/link';
import fetcher from 'libs/fetcher';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps = async context => {
  const { query } = context;
  const { user, repo } = query;
  const data = await fetcher<RepoResponse>(
    `https://api.github.com/repos/${user}/${repo}`,
  );

  return { props: { data } };
};

interface RepoResponse {
  forks_count: number;
  stargazers_count: number;
  watchers: number;
}

const RepoPage: NextPage<{ data: RepoResponse }> = props => {
  const { data: initialData } = props;
  const {
    query: { user, repo },
  } = useRouter();

  const { data, isValidating } = useSWR<RepoResponse>(
    `https://api.github.com/repos/${user}/${repo}`,
    fetcher,
    {
      initialData,
    },
  );

  const { data: popularRepos } = useSWR<string[]>('/api/data', fetcher);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className="font-bold text-xl uppercase m-5">
        {user}/{repo}
      </h1>
      {data && !isValidating ? (
        <div>
          <p>forks: {data.forks_count}</p>
          <p>stars: {data.stargazers_count}</p>
          <p>watchers: {data.watchers}</p>
        </div>
      ) : (
        'loading...'
      )}
      <br />
      <br />
      <Link href="/">
        <a>Back</a>
      </Link>
      <hr />
      {popularRepos
        ? popularRepos.map(project => (
            <p key={project}>
              <Link href="/[user]/[repo]" as={`/${project}`}>
                <a>{project}</a>
              </Link>
            </p>
          ))
        : 'loading...'}
    </div>
  );
};

export default RepoPage;
