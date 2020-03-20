import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from 'components/Button';

const Title = styled.h1`
  ${tw`bg-black text-white px-2 py-3 mt-2`}
  font-size: 50px;
`;

export default () => (
  <div>
    <Title className="underline opacity-50">My page</Title>
    <Button>Hello world</Button>
  </div>
);
