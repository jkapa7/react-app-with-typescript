import { useReducer } from "react";
import { Sub } from "../types";

//UN ESTADO PUEDE TENER VARIOS VALORES, PARA ESO EN LA INTERDACE PUEDO DEFINIR LOS VALORES QUE TENDRA CADA ESTADO
interface FormState {
  inputValues: Sub;
}

type FormReducerAction =
  | {
      type: "change_value";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | {
      type: "clear";
    };

const INITIAL_STATE = {
  nick: "",
  avatar: "",
  subMonths: 0,
  description: "",
};

const formReducer = (
  state: FormState["inputValues"],
  action: FormReducerAction
) => {
  let inputName;
  let inputValue;

  switch (action.type) {
    case "change_value":
      inputName = action.payload.inputName;
      inputValue = action.payload.inputValue;
      return {
        ...state,
        [inputName]: inputValue,
      };

    case "clear":
      return INITIAL_STATE;
  }
};

const useNewSubForm = () => {
  return useReducer(formReducer, INITIAL_STATE);
};

export default useNewSubForm;
