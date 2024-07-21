import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="px-8 py-6 mx-4 mt-4 text-center rounded-lg shadow-lg bg-gray-800 md:w-1/3">
        <h1 className="text-6xl font-bold text-white">404</h1>
        <p className="mt-4 text-lg text-gray-300">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-block px-4 py-2 mt-6 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
