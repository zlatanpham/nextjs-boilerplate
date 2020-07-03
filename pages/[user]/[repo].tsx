import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { GetServerSideProps, NextPage } from 'next';
import APIs, { ReposResponse } from 'libs/apis';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { user, repo } = query;
  const data = await APIs.Repository.getBySlug({
    user: (user || '').toString(),
    repo: (repo || '').toString(),
  });

  return { props: { data } };
};

const RepoPage: NextPage<{ data: ReposResponse }> = (props) => {
  const { data: initialData } = props;
  const {
    query: { user, repo },
  } = useRouter();

  const { data, isValidating } = useSWR<ReposResponse>(
    [APIs.Repository.getBySlugURL, user, repo],
    (_, user, repo) => APIs.Repository.getBySlug({ user, repo }),
    {
      initialData,
    },
  );

  const { data: popularRepos } = useSWR<string[]>(APIs.Repository.getURL, () =>
    APIs.Repository.get(),
  );

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
        ? popularRepos.map((project) => (
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
