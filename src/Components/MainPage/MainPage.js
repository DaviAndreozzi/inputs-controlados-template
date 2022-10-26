import React, { useState } from "react";
import { MainContainer, Form, Input } from "./styles";

function MainPage() {

  const [name, setName] = useState ("")
  const [Idade, setIdade] = useState ("")
  const [Email, setEmail] = useState ("")


  const onChangeName = (event) => {
    setName(event.target.value)
  };
  const onChangeIdade = (event) => {
    setIdade(event.target.value)

  };
  const onChangeEmail = (event) => {
    setEmail(event.target.value)

  };
const user = {
  name:name,
  Idade:Idade,
  Email:Email,
}
console.log(user)
  
const enviar = (event)=>{
  setName(event.target.value)
  setIdade(event.target.value)
  setEmail(event.target.value)
};

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <input onChange={onChangeName} value={name}/>
        </label>
        <label>
          Idade:
          <input onChange={onChangeIdade} value={Idade} />
        </label>
        <label>
          E-mail:
          <input onChange={onChangeEmail} value={Email}/>
        </label>
        <button onClick={enviar}>Enviar dados</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
