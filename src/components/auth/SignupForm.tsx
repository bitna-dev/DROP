import Button from '@components/Button'
import Flex from '@components/Flex'
import Spacing from '@components/Spacing'
import Text from '@components/Text'
import TextField from '@components/TextField'
import { css } from '@emotion/react'
import { SignupValues } from '@models/signup'
import { colors } from '@styles/colorPalette'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'

const Form = ({
  onSubmit,
}: {
  onSubmit: (formValues: SignupValues) => void
}) => {
  const [formValues, setFormValues] = useState<SignupValues>({
    email: '',
    password: '',
    c_password: '',
    name: '',
  })

  const errors = useMemo(() => validate(formValues), [formValues])

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }))
  }, [])

  //제출가능한 상태인지 체크
  const isSummitable = Object.keys(errors).length !== 0

  // input창이 처음일 경우
  const [dirty, setDirty] = useState<Partial<SignupValues>>({})
  const handleBlur = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target
    setDirty((prevDirty) => ({
      ...prevDirty,
      [name]: 'true',
    }))
  }, [])

  return (
    <Flex direction="column" css={FormContainerStyle}>
      <Text typography="t1" textAlign="center" bold>
        회원가입
      </Text>
      <TextField
        label="이메일"
        placeholder="이메일을 입력해주세요."
        name="email"
        value={formValues.email}
        onChange={handleOnChange}
        hasError={Boolean(dirty.email) && Boolean(errors.email)}
        onBlur={handleBlur}
        helpMessage={Boolean(dirty.email) ? errors.email : ''}
      />
      <Spacing size={16} />

      <TextField
        label="이름"
        placeholder="이름을 입력해주세요."
        name="name"
        value={formValues.name}
        onChange={handleOnChange}
        hasError={Boolean(dirty.name) && Boolean(errors.name)}
        onBlur={handleBlur}
        helpMessage={Boolean(dirty.name) ? errors.name : ''}
      />
      <Spacing size={16} />
      <TextField
        label="패스워드"
        type="password"
        name="password"
        placeholder="비밀번호를 입력해주세요."
        value={formValues.password}
        onChange={handleOnChange}
        hasError={Boolean(dirty.password) && Boolean(errors.password)}
        onBlur={handleBlur}
        helpMessage={Boolean(dirty.password) ? errors.password : ''}
      />
      <Spacing size={16} />
      <TextField
        label="패스워드 재확인"
        type="password"
        name="c_password"
        placeholder="비밀번호를 입력해주세요."
        value={formValues.c_password}
        onChange={handleOnChange}
        hasError={Boolean(dirty.c_password) && Boolean(errors.c_password)}
        onBlur={handleBlur}
        helpMessage={Boolean(dirty.c_password) ? errors.c_password : ''}
      />
      <Spacing size={32} />

      <Button
        size="large"
        onClick={() => {
          onSubmit(formValues)
        }}
        disabled={isSummitable}
      >
        회원가입
      </Button>

      <Spacing size={16} />
      <Link to="/signup" css={LinkStyles}>
        <Text typography="t7" color="gray600">
          이미 계정이 있으신가요?
        </Text>
      </Link>
    </Flex>
  )
}
const validate = (formValues: SignupValues) => {
  let errors: Partial<SignupValues> = {}
  if (validator.isEmail(formValues.email) === false) {
    errors.email = '이메일 형식을 확인해주세요.'
  }
  if (formValues.password.length < 8) {
    errors.password = '비밀번호를 8자 이상 입력해주세요.'
  }
  if (formValues.c_password.length < 8) {
    errors.c_password = '비밀번호를 8자 이상 입력해주세요.'
  } else if (
    validator.equals(formValues.password, formValues.c_password) === false
  ) {
    errors.c_password = '비밀번호가 일치하지 않습니다.'
  }
  if (formValues.name.length < 2) {
    errors.name = '이름을 2자 이상 입력해주세요.'
  }
  return errors
}
const FormContainerStyle = css`
  padding: 24px;
  max-width: 480px;
  margin: 0 auto;
`

const LinkStyles = css`
  text-align: center;
  & > span:hover {
    color: ${colors.green};
    text-decoration: underline ${colors.green};
  }
`
export default Form
