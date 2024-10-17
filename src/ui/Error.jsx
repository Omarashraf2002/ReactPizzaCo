import {  useRouteError } from 'react-router-dom';
import LinkButtons from './LinkButtons';

function Error() {

  const error = useRouteError()
  console.log(error);
  

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data}</p>
      <LinkButtons to="-1">&larr; Go back</LinkButtons>
    </div>
  );
}

export default Error;
