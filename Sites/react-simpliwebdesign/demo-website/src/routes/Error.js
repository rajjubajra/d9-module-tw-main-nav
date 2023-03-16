import { useRouteError } from "react-router-dom";
import Layout from '../layout/Layout';


export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <Layout>
    <div className="w-full grid" id="error-page">
      <div className="mt-20">
        <h1 className="text-[55px]">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-[30px]">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      
    </div>
    </Layout> 
  );
}