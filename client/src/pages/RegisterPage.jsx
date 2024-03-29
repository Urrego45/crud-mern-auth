import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
} = useForm()
  const { signup, isAuthenticated, errors: registerErrors } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/tasks')
  }, [isAuthenticated])

  const onSubmit = handleSubmit( async (values) => {
    signup(values)
  })

  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
        {registerErrors.map((error, i) => (
          <div className='bg-red-500 p-2 text-white' key={i}>
            {error}
          </div>
        ))}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          placeholder="Write your name"
          {...register("username")}
        />
        {errors.username?.message && (
          <p className="text-red-500">{errors.username?.message}</p>
        )}

        <input type="email"
          {... register("email", { required: true })}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          placeholder='Email'
        />
        {errors.email && (
            <p className='text-red-500'>Email is required</p>
        )}


        <input type="password"
          {... register("password", { required: true })}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          placeholder='Password'
        />
        {errors.password && (
            <p className='text-red-500'>Password is required</p>
        )}


        <button type='submit'>Register</button>
      </form>

      <p>
        Already Have an Account? <Link className="text-sky-500" to="/login">Login</Link>
      </p>
    </div>
  )
}
