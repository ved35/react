import  { useContext } from 'react'
import { Wrapper } from '../App'
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {

  const { islogin } = useContext(Wrapper);

  if(islogin){
    return children
  }
  else{
    return <Navigate to='/Login' />
  }
}

export default PrivateRoute