import axios from "axios";
// import { useSession } from 'next-auth/react';

const useAxios = () => {
  //   const session = useSession();

  //   const token = session?.data?.user?.accessToken;

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVhMzNhODRhNDY2MTZlMmMxYWIyMzAiLCJlbWFpbCI6InJpZmF0YmRjYWxsaW5naXQyM0BnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTc1MDc0MTk4MiwiZXhwIjoxNzUwODI4MzgyfQ.rOGzu0ItwKxeu8SLkjavC5sogDqtaP9kswxastS6sYw";

  const axiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return axiosInstance;
};

export default useAxios;
