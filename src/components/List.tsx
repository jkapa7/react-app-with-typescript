import { Sub } from "../types";

//CREO ESTA INTERFCE PARA DEFINIR QUE ES LO QUE SE RECIBIRA POR PROPS
interface Props {
  subs: Array<Sub>;
}

//INDICO QUE LAS SUBS QUE VOY A RECIBIR DEBEN CUMPLIR SI O SI CON LAS PROPIEDADES QUE TIENE PROPS
const List = ({ subs }: Props) => {
  return (
    <ul>
      {subs.map((sub) => {
        return (
          <li key={sub.nick}>
            <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
            <h4>
              {sub.nick} (<small>{sub.subMonths}</small>)
            </h4>
            <p>{sub.description?.substring(0, 100)}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
