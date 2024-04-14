import { productType, useProduct } from "../contexts/ProductContexts";
import { Link, useLocation, useParams } from "react-router-dom";
import NotFoundPage from "./Error";
import tw, { styled } from "twin.macro";
import Loader from "./Loader";
import { useEffect } from "react";
import RatingStar from "./RatingStar";
import ProductCard from "./ProductCard";

const Container = styled.div`
  ${tw`max-w-3xl mx-auto p-8 mb-0 min-h-screen`}
`;

const ProductDetailPage = () => {
  const { id } = useParams();
  const { getProductById, isLoading, data: products } = useProduct();

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const product = getProductById(Number(id)) || {};
  if (!product) {
    return <NotFoundPage />;
  }
  const { title, price, description, category, image, rating } =
    (product as productType) || {};

  const categoryProducts = products.filter(
    (product) => product.category === category && Number(id) !== product.id
  );

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

      <div tw="text-gray-600 mb-2">
        <RatingStar rate={rating?.rate} reviews={rating?.count} />
        {/* Rating: {rating?.rate} ({rating?.count} reviews) */}
      </div>
      <p tw="text-gray-700">{description}</p>

      <div tw="mt-4">
        <Link to="/" tw="text-blue-500 hover:underline">
          Back to Catalog
        </Link>
      </div>
      <hr tw="my-4" />
      <h2>
        More Products in <strong> {category} </strong>
      </h2>
      <div tw="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default ProductDetailPage;
