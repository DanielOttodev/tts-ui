import { Navigate, } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { useAuth } from '../hooks/useAuth';

export const Protected = ({ children }: PropsWithChildren) => {

  const { user } = useAuth();
  if (!user) {
    console.log('NoAuth: Redirecting')
    return <Navigate to="/login" replace />;
  }

  return children;
};