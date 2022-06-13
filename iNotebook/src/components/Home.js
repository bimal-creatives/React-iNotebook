import React, { useEffect } from "react";
import Notes from "./Notes";
import { useNavigate } from "react-router-dom";


const Home = (props) => {
  let navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(!token) {
      navigate('../login', { replace: true})
    }
  }, [])
  const {showAlert} = props
  return (
    <div>
     
      <Notes showAlert={showAlert} />
    </div>
  );
};

export default Home;
