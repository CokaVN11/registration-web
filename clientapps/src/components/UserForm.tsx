import { useForm } from 'react-hook-form';

interface UserForm {
  email: string;
  password: string;
}

interface UserFormProps {
  formType: 'login' | 'register';
  onSubmit: (data: UserForm) => void;
  message: string;
  error: string;
}

const UserForm = ({ formType, onSubmit, message, error }: UserFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>();

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="email"
          className="block font-medium text-gray-700 text-sm"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="block border-gray-300 focus:border-indigo-500 shadow-sm px-3 py-2 border rounded-md focus:ring-indigo-500 w-full focus:outline-none sm:text-sm"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">Email is required</p>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block font-medium text-gray-700 text-sm"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="block border-gray-300 focus:border-indigo-500 shadow-sm px-3 py-2 border rounded-md focus:ring-indigo-500 w-full focus:outline-none sm:text-sm"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must have at least 6 characters',
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">Password is required</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 border border-transparent rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full font-medium text-sm text-white focus:outline-none"
      >
        {formType === 'login' ? 'Login' : 'Register'}
      </button>
      {message && <p className="text-green-500 text-sm">{message}</p>}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  );
};

export default UserForm;
