import styled from 'styled-components';

//type
interface JoinInputProps {
  type: string;
}

const StyledJoinInput = styled.input`
  padding: 15px 10px;
  background: ${(props) => props.theme.colors.Gray100};
  border: none;
  ${(props) => props.theme.fontStyles.textInput};
  color: ${(props) => props.theme.colors.TextBlack};
`;

function JoinInput({ type }: JoinInputProps) {
  return <StyledJoinInput type={type} required={isRequired} />;
}

export default JoinInput;
