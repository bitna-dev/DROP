import React from 'react'

import { useForm, SubmitHandler } from 'react-hook-form'

interface SignupFormProps {
  email: string
  password: string
  c_password: string
}
const SignupForm = ({}: SignupFormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = () => console.log()

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__title">회원가입</div>
      <div className="form__block">
        <input type="email" id="email" required {...register('email')} />
      </div>
      <div className="form__block">
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          required
          {...register('password')}
        />
      </div>
      <div className="form__block">
        <label htmlFor="c_password">비밀번호</label>
        <input
          type="password"
          id="c_password"
          required
          {...register('c_password')}
        />
      </div>
    </form>
  )
}

export default SignupForm
