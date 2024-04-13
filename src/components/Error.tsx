import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {

  return (
    <div tw="flex flex-col items-center justify-center h-screen p-20">
      <h1 tw="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p tw="text-lg mb-8">The page you're looking for does not exist.</p>
      <Link to="/" tw="text-blue-500 underline">
        Go back to home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
