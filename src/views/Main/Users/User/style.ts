import styled from "styled-components";

export const UserContent = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .user-actions {
    margin-top: auto;
    display: flex;
    gap: 16px;
    justify-content: space-between;
  }

  .ant-form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex: 1;
  }

  .user-form-fields {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .user-actions {
    margin-top: auto;
    width: 100%;
  }

  .half-width {
    width: calc(50% - 10px);
  }
`;