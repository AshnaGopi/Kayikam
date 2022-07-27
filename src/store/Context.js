import { createContext, useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import {reactLocalStorage} from 'reactjs-localstorage' ;

import { supabase } from '../Supabase';


const AuthContext = createContext()
export function useAuthContext() {
    return useContext(AuthContext)
}

export default function Context({children}) {

  // const history = useHistory()

  // console.log(history);

    //auth context
    const [user, setuser] = useState(null)
    const [session, setsession] = useState(null)
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
      const authListner = supabase.auth.onAuthStateChange((event, session) => {
        if(event === 'SIGNED_IN'){
          setuser(session?.user)
          setsession(session)
          setAuthenticated(true)
        }
        else if(event === 'SIGNED_OUT') 
          setAuthenticated(false)
      })
      return () => {
        authListner.data.unsubscribe()
      }
    }, [])

    useEffect(() => {
        const s = reactLocalStorage.getObject('supabase.auth.token')
        user == null && setuser(s?.currentSession?.user)
        session == null && setsession(s?.currentSession)
        // Object.keys(s).length == 0 && history.push('/') 
    }, [])

    return(
      <AuthContext.Provider value={{
        user, setuser
      }}>
        {children}
      </AuthContext.Provider>
    )
}