import React, { FC, useState, useEffect } from 'react'
import { Navigate, RouteProps } from 'react-router'

const PrivateRoute: FC<RouteProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null)
  const logged = !!user?.username

  useEffect(() => {
    setUser({ username: 'ghalex', logged: true })
  }, [])

  return logged
    ? <div>{children}</div>
    : <Navigate to="/login" />
}

export default PrivateRoute
