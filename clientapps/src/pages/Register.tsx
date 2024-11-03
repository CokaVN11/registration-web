import { useState } from 'react';
import axiosClient from '@/utils/axiosClient';
import { AxiosError } from 'axios';
import UserForm from '@/components/UserForm';

interface RegisterForm {
  email: string;
  password: string;
}

interface ErrorResponse {
  message: string;
}

const Register = () => {
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: RegisterForm) => {
    try {
      setIsLoading(true);
      await axiosClient.post('/user/register', data);
      setMessage('Registration successful!');
    } catch (err) {
      setError(
        (err as AxiosError<ErrorResponse>).response?.data?.message ||
          'An error occurred',
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-white shadow-md my-auto p-8 rounded-lg">
      {isLoading && (
        <div className="top-0 right-0 absolute flex bg-slate-500 bg-opacity-45 w-screen h-screen">
          <svg
            className="justify-center items-center mx-auto my-auto text-indigo-400 animate-spin size-24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0c4.418 0 8 3.582 8 8s-3.582 8-8 8v-4a4 4 0 00-4-4H4z"
            ></path>
          </svg>
        </div>
      )}
      <h2 className="mb-4 font-bold text-2xl text-center">Register</h2>
      <UserForm
        formType="register"
        onSubmit={onSubmit}
        message={message}
        error={error}
      />
    </div>
  );
};

export default Register;
