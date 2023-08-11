import { Sub } from "../types";
import useNewSubForm from "../hooks/useNewSubForm";

//DEFINO LA INTERFACE PARA LAS PROPS QUE VA A RECIBIR EL FORMULARIO
interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

//INDICO QUE EL USESTATE SERA DE TIPO FORMSTATE
const Form = ({ onNewSub }: FormProps) => {
  const [inputValues, dispatch] = useNewSubForm();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNewSub(inputValues);
    handleClear();
  };

  //FORMULARIO CONTROLADO, EL VALUE DEL STATE ES EL DEL INPUT
  //DEFINO EL TIPO DE EVENT, LO SAQUE USANDO LA FUNCTION EN EL INPUT Y HACIENDO HOVER...
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  const handleClear = () => {
    dispatch({ type: "clear" });
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
        <button type="button" onClick={handleClear}>
          Clear form
        </button>
        <button type="submit">Save new sub!</button>
      </form>
    </div>
  );
};

export default Form;
