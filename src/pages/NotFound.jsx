import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-blue-100 text-center">
      <div className="max-w-md p-8 bg-white rounded-3xl shadow-2xl animate-fade-in">
        <div className="text-blue-700 mb-4">
          <HiOutlineExclamationCircle className="mx-auto text-7xl" />
        </div>
        <h1 className="text-5xl font-extrabold text-blue-900 mb-4">404</h1>
        <p className="text-lg text-gray-700 mb-6">
          Sorry, the page you're looking for doesn’t exist or may have been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white text-sm px-6 py-3 rounded-full shadow-md transition-all duration-300"
        >
          ← Back to Homepage
        </Link>
      </div>
    </div>
  );
}
