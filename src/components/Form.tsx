import { useState } from "react";
import { Sub } from "../types";

//UN ESTADO PUEDE TENER VARIOS VALORES, PARA ESO EN LA INTERDACE PUEDO DEFINIR LOS VALORES QUE TENDRA CADA ESTADO
interface FormState {
  inputValues: Sub;
}

//DEFINO LA INTERFACE PARA LAS PROPS QUE VA A RECIBIR EL FORMULARIO
interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

//INDICO QUE EL USESTATE SERA DE TIPO FORMSTATE
const Form = ({ onNewSub }: FormProps) => {
  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
    nick: "",
    avatar: "",
    subMonths: 0,
    description: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNewSub(inputValues);
  };

  //FORMULARIO CONTROLADO, EL VALUE DEL STATE ES EL DEL INPUT
  //DEFINO EL TIPO DE EVENT, LO SAQUE USANDO LA FUNCTION EN EL INPUT Y HACIENDO HOVER...
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
        />

        <input
          onChange={handleChange}
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
        />

        <input
          onChange={handleChange}
          value={inputValues.subMonths}
          type="number"
          name="subMonths"
          placeholder="subMonths"
        />

        <textarea
          onChange={handleChange}
          value={inputValues.description}
          name="description"
          placeholder="description"
        />
        <button>Save new sub!</button>
      </form>
    </div>
  );
};

export default Form;
