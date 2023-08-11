import { useEffect, useState, useRef } from "react";
import "./App.css";
import { Sub } from "./types";
import List from "./components/List";
import Form from "./components/Form";

//CONTRATO QUE DEBE CUMPLIR CADA SUB.
interface AppState {
  subs: Sub[];
  newSubsNumber: number;
}

const INITIAL_STATE = [
  {
    nick: "juan",
    avatar: "https://i.pravatar.cc/150?u=juan",
    subMonths: 3,
    description: "Juan hace de moderardor en el canal",
  },

  {
    nick: "Nicole",
    avatar: "https://i.pravatar.cc/150?u=nicole",
    subMonths: 7,
  },
];

function App() {
  // ESTA ES OTRA FORMA DE DEFINIR EL TIPO DE ELEMNTO: useState<Array<Sub>>([]);
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  const handleNewSub = (newSub: Sub) => {
    setSubs((subs) => [...subs, newSub]);
  };

  return (
    <div className="App" ref={divRef}>
      <h1>Subs del canal</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
//TYPE NO ES EXTENSIBLE, NO SE PUEDE HACER EXTENDS, CON INTERFACE SI SE PUEDE
