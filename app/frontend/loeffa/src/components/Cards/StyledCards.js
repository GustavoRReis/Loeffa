import styled from 'styled-components';

const StyledCards = styled.div`
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  & .card {
    width: 300px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    text-align: center;
  }

  & .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
  }

  & .card-title {
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
  }

  & .card-status1 {
    font-size: 16px;
    margin-top: 5px;
    background-color: red;
    color: white;
    font-weight: bold;
  }

  & .card-status2 {
    font-size: 16px;
    margin-top: 5px;
    background-color: green;
    color: white;
    font-weight: bold;
  }
`;

export default StyledCards;
