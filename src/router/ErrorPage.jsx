import { useRouteError,Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div  className="grid place-content-center h-screen w-full " >
      <h1 className="text-8xl text-center font-bold text-red-500">Oops!</h1>
      <p className="text-center mt-5 font-semibold text-2xl md:text-3xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-center mt-3 font-semibold text-lg">
        <i>{error.statusText || error.message}</i>

      </p>
        <Link to="/" className="button bg-blue-600 text-center p-3 md:w-2/4  mx-auto rounded-lg text-white mt-4 font-semibold hover:bg-blue-700">Go back to the home page</Link>
    </div>
  );
}
