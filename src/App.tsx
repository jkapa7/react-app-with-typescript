import { useEffect, useState, useRef } from "react";
import "./App.css";
import { Sub } from "./types";
import List from "./components/List";
import Form from "./components/Form";
import { getAllSubs } from "./services/getAllSubs";

//CONTRATO QUE DEBE CUMPLIR CADA SUB.
interface AppState {
  subs: Sub[];
  newSubsNumber: number;
}

function App() {
  // ESTA ES OTRA FORMA DE DEFINIR EL TIPO DE ELEMNTO: useState<Array<Sub>>([]);
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null);

  //TYPESCRIPT VALIDA EN ESTATICO, EN BUILD TIME. NO PUEDE VALIDAR COSAS DINAMICAS
  useEffect(() => {
    getAllSubs().then(setSubs);
  }, []);

  const handleNewSub = (newSub: Sub) => {
    setSubs((subs) => [...subs, newSub]);
    setNewSubsNumber((n) => n + 1);
  };

  return (
    <div className="App" ref={divRef}>
      <h1>Subs del canal</h1>
      <List subs={subs} />
      New subs {newSubsNumber}
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
//TYPE NO ES EXTENSIBLE, NO SE PUEDE HACER EXTENDS, CON INTERFACE SI SE PUEDE
