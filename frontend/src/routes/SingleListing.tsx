import { useLoaderData } from "react-router-dom";

const SingleListing = () => {
  const data = useLoaderData();
  return (
    <h1 className="text-3xl font-bold text-pink-800">{JSON.stringify(data)}</h1>
  );
};

export default SingleListing;
