import styled from 'styled-components';
import search from '../assets/svgs/id_search.svg';

const SearchForm = () => {
    return (
        <form>
            <Container>
                <InputContainer>
                  <SearchImage src={search} alt="검색 로고" />
                  <NicknameInput placeholder="아이디 검색" />
                </InputContainer>
            </Container>
        </form>
    )
}

export default SearchForm;

const NicknameInput = styled.input`
    width: 700px;
    height: 58px;
    border-radius: 10px;
    display: flex;
    border: none;
    outline: none;
    font-size: 18px;
`

const SearchImage = styled.img`
    display: flex;
    padding: 10px;
`

const InputContainer = styled.div`
    width: 750px;
    height: 60px;
    border: 1px solid rgba(166, 166, 166, 1);
    border-radius: 10px;
    display: flex;
`

const Container = styled.div`
    width: 878px;
    height: 72px;
    display: flex;
`