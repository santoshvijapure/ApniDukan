import React from "react";
import { Link } from "react-router-dom";
import tw, { styled } from "twin.macro";

const Container= styled.div`
${tw`flex flex-col items-center justify-center h-screen p-20`}
`
const NotFoundPage: React.FC = () => {

  return (
    <Container>
      <h1 tw="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p tw="text-lg mb-8">The page you're looking for does not exist.</p>
      <Link to="/" tw="text-blue-500 underline">
        Go back to home page
      </Link>
    </Container>
  );
};

export default NotFoundPage;
