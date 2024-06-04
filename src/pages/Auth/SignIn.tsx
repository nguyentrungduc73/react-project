
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserInfo } from 'src/features/user/userSelector'
import { setUserInfo } from 'src/features/user/userSlice'
const SignIn = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const idRef = useRef<HTMLInputElement>(null);
  const user = useSelector(selectUserInfo)
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!emailRef.current || !idRef?.current) {
      return
    } 
    const emailValue = emailRef.current.value
    const idReftValue = idRef.current.value 
    dispatch(setUserInfo({user: {
      email: emailValue,
      id: idReftValue,
    }}))
    
  }
  return (
    <div>
      <input type="text" name="email" id="" ref={emailRef}/>
      <input type="text" name="id" id="" ref={idRef} />
      <button onClick={
        handleSubmit
      }>submit</button>
    <div>
      {user.email}/{user.id}
    </div>
    </div>
  )
}

export default SignIn