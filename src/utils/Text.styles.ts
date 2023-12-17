import styled from 'styled-components';

export const Text = styled.p`
	color: ${({ theme }) => theme.text};
	font-size: 14px;

	&.auth {
		color: ${({ theme }) => theme.authBlue};
	}

	&.logo {
		/* color: ${({ theme }) => theme.authBlue}; */
		letter-spacing: -1px;
		font-size: 22px;
		font-family: "Oswald", sans-serif;
	}
`;