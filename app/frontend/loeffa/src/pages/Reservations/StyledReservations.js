import styled from 'styled-components';

const StyledReservations = styled.div`
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & form {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
  }

  & .overlay button {
    margin: 8px;
  }
`;

export default StyledReservations;
