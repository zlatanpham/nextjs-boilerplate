import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from 'components/Button';
import useSWR from 'swr';
import Link from 'next/link';
import APIs from 'libs/apis';

const Title = styled.h1`
  ${tw`bg-black text-white px-2 py-3 mt-2`}
  font-size: 50px;
`;

export default () => {
  const { data } = useSWR<string[]>(APIs.Repository.getURL, () =>
    APIs.Repository.get(),
  );
  console.log(data);
  return (
    <div>
      <Title className="underline opacity-50">My page</Title>
      <Button>Hello world</Button>

      <h1>Trending Projects</h1>
      <div>
        {data
          ? data.map(project => (
              <p key={project}>
                <Link href="/[user]/[repo]" as={`/${project}`}>
                  <a>{project}</a>
                </Link>
              </p>
            ))
          : 'loading...'}
      </div>
    </div>
  );
};
