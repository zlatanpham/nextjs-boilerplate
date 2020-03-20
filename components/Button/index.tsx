import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

const Container = styled.button`
  ${tw`px-5 py-3 bg-orange-600 text-white rounded`}
`;

const Button: React.FC<any> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Button;
