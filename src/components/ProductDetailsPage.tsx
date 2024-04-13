import { productType, useProduct } from "../contexts/ProductContexts";
import { Link, useParams } from "react-router-dom";
import NotFoundPage from "./Error";
import tw, { styled } from "twin.macro";
import Loader from "./Loader";


const Container = styled.div`
  ${tw`max-w-3xl mx-auto p-8 mb-0 min-h-screen`}`
const ProductDetailPage = () => {
  const { id } = useParams();
  const { getProductById ,isLoading} = useProduct();

  const product = getProductById(Number(id)) || {};
  if (!product) {
    return <NotFoundPage />;
  }
  const { title, price, description, category, image, rating } =
    (product as productType) || {};

  
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Container>
      <div tw="flex justify-center items-center mb-4">
        <img src={image} alt={title} tw="w-64 h-auto" />
      </div>
      <h2 tw="text-3xl font-bold mb-4">{title}</h2>
      <p tw="text-gray-600 mb-2">Price: ${price}</p>
      <p tw="text-gray-600 mb-2">Category: {category}</p>

      <p tw="text-gray-600 mb-2">
        <RatingStar rate={rating?.rate} reviews={rating?.count} />
        {/* Rating: {rating?.rate} ({rating?.count} reviews) */}
      </p>
      <p tw="text-gray-700">{description}</p>

      <div tw="mt-4">
        <Link to="/" tw="text-blue-500 hover:underline">
          Go back to home
        </Link>
      </div>
    </Container>
  );
};

export default ProductDetailPage;

const RatingStar = ({ rate, reviews }: { rate: number; reviews: number }) => {
  return (
    <div tw="flex items-center">
      <svg
        tw="w-4 h-4 text-yellow-300 me-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <p tw="ms-2 text-sm font-bold text-gray-900 ">{rate}</p>
      <span tw="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
      <a
        href="#"
        tw="text-sm font-medium text-gray-900 underline hover:no-underline "
      >
        {reviews} reviews
      </a>
    </div>
  );
};
