import { DropDown } from '@/components/atoms/Board/DropDown';
import SearchBar from '@/components/atoms/Board/SearchBar';
import { StyledSearch } from '@/styles/components/Board/Board';

function Search() {
  return (
    <>
      <StyledSearch>
        <DropDown options={['제목', '내용']} />
        <SearchBar />
      </StyledSearch>
    </>
  );
}

export default Search;
