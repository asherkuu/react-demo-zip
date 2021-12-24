import styled from "styled-components";

export const Contents = styled.div`
  & > .half {
    display: flex;
    justify-content: space-between;

    & > div {
      width: 45%;
    }
  }
`;

export const VInputForm = styled.form`
  box-sizing: border-box;
  margin-bottom: 30px;

  & > input {
    width: 60%;
    height: 46px;
    border-radius: 4px 0 0 4px;
    border: 1px solid gray;
  }

  & > button {
    background-color: #fff;
    height: 46px;
    padding: 0 10px;
    border-radius: 0 4px 4px 0;
    border: 1px solid gray;
    border-left: none;

    :hover {
      cursor: pointer;
    }
  }
`;

export const VListItem = styled.div`
  border: 1px solid gray;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const VListContents = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;

  :not(:last-child) {
    border-bottom: 1px solid gray;
  }

  & > button {
    background-color: #fff;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 5px;
    transition: background-color 0.15s ease-out;

    :hover {
      cursor: pointer;
      background-color: #beddeb;
    }
  }

  span.done {
    text-decoration: line-through;
  }
`;
