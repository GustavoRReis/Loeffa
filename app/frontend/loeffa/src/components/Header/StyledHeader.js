import styled from 'styled-components';

const StyledHeader = styled.header`
  .header-container {
    background-color: #1a1b1c;
    display: flex;
    height: 150px;
  }

  .div-img-container {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .div-img-container img {
    width: 250px;
  }

  .div-ul-container {
    width: 70%;
  }

  .ul-container {
    margin: auto;
    list-style-type: none;
    font-size: 32px;
    color: white;
    font-weight: bold;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    margin-right: 64px;
    align-items: center;
  }

  .ul-container li {
    padding: 32px;
  }

  .div-ul-container a {
    text-decoration: none;
    color: white;
    position: relative;
    transition: color 0.3s;
  }

  .div-ul-container a::before {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: white;
    transform: scaleX(0);
    transition: transform 0.3s;
    transform-origin: left;
  }

  .div-ul-container a:hover::before {
    transform: scaleX(1);
  }

  @media screen and (max-width: 768px) {
    .header-container {
      flex-direction: column;
      height: auto;
    }

    .div-img-container,
    .div-ul-container {
      width: 100%;
      text-align: center;
    }

    .ul-container {
      justify-content: center;
      margin-right: 0;
    }
  }
`;

export default StyledHeader;
