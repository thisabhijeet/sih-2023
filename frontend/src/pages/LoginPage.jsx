import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/cases");
  });
  return <div></div>;
}

export default LoginPage;
