import { useParams } from "react-router-dom";

const NotFound = () => {

    const params = useParams();
    console.log(params)

    return ( 
        <div className="h-screen flex justify-center">
            <h1 className="text-gray-600 text-2xl pt-64">La página no existe.</h1>
        </div>
      );
}
 
export default NotFound;