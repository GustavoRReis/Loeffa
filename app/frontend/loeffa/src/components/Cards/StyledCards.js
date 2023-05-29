import styled from 'styled-components';

const StyledCards = styled.div`
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 70%;
    margin:auto;
    flex:wrap;
  }

  .card {
    width: 300px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }

  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
  }

  .card-title {
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
  }

  .card-status1 {
    font-size: 16px;
    margin-top: 5px;
    background-color: red;
    color: white;
    font-weight: bold;
    padding: 5px;
    border-radius: 4px;
  }

  .card-status2 {
    font-size: 16px;
    margin-top: 5px;
    background-color: green;
    color: white;
    font-weight: bold;
    padding: 5px;
    border-radius: 4px;
  }

  & .button-cancel {
    background-color: white;
    color: red;
    border: 1px solid red;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 8px 16px;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #d32f2f;
      color: white;
      cursor: pointer;
      border: none;
    }
  }

  & .button-booking {
    background-color: white;
    color: blue;
    border: 1px solid blue;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 8px 16px;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: blue;
      color: white;
      cursor: pointer;
    }
  }
`;

export default StyledCards;
