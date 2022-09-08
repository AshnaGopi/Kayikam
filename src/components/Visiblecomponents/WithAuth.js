import { useEffect } from 'react'
import { useRouter } from 'next/router'
import {reactLocalStorage} from 'reactjs-localstorage';
import { useHistory } from 'react-router-dom';

export default function WithAuth({children}){

  const router = useRouter()
  const history= useHistory()

  useEffect(() => {
    const s = reactLocalStorage.getObject('supabase.auth.token')
    s == {} && history.replace('student/login')
  }, [])
  
  return (
    <>
      {children}
    </>
  )
}