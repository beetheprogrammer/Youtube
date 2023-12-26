import React from 'react'
import { StyledAuthButton } from './AuthButton.styles'
import { Text } from '../../utils/Text.styles'
import { useAppContext } from '../../context/App.context';
import { FaRegUserCircle } from "react-icons/fa";

const AuthButton = () => {
  const { text } = useAppContext();

  return (
		<StyledAuthButton>
			<FaRegUserCircle size={22} />
			<Text className='auth'>{text.signIn}</Text>
		</StyledAuthButton>
	);
}

export default AuthButton