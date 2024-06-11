import Spinner from "./Spinner";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: \;;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1.Load the authenticate user
  const { isLoading, isAuthenticated } = useUser();

  //2. if there is NO authenticate user redirect to the /login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  //3.while loading ,show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  //4. if there IS a user ,render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
