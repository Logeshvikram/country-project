import React, { useState } from 'react'
import 

const AuthContext = React.createContext()
export default function AuthProvider(props) {
  const [user, setUser] = useState(null)
  const login = (user) => {
    setUser(user)
  }
  const logout = () => {
    setUser(null)
  }

  return (
    <div>
      <AuthContext.Provider value={{ user, login, logout }}>
        {props.children}
      </AuthContext.Provider>
export const useAuth=()=>{
  return useContext(AuthContext)
}

    </div>
  )
}
