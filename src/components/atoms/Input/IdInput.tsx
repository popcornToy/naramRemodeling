import { StyledFindInput } from '@/styles/components/Login/Find';

export default function IdInput() {
  return (
    <>
      <StyledFindInput>
        <label htmlFor="name" className="sr-only">
          이름
        </label>
        <input type="text" name="username" id="name" placeholder="이름" />
      </StyledFindInput>
    </>
  );
}
