import {ErrorResponse, useNavigate, useRouteError} from "react-router-dom";
import {useEffect} from "react";

export default function ErrorPage() {
  const error = useRouteError() as ErrorResponse;
  console.error(error);
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/choices/0")
  })
  return (
    <>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.status} {error.statusText}</i>
      </p>
    </>
  )
}