import styled from 'styled-components';

const StyledBookButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;

  & > div {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    }
  }
`;

export default StyledBookButton;
