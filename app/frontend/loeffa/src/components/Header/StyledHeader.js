import styled from 'styled-components';

const StyledHeader = styled.header`
  & .header-container {
    background-color: #1a1b1c;
    display: flex;
    height: 200px;
  }

  & .div-img-container {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .div-img-container img {
    width: 350px;
  }

  & .div-ul-container {
    width: 70%;
  }

  & .ul-container {
    margin: auto;
    list-style-type: none;
    font-size: 32px;
    color: white;
    font-weight: bold;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export default StyledHeader;
