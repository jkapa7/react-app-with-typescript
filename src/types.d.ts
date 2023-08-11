//CON EL .D EN EL NOMBRE DEL ARCHIVO INDICO QUE ES SOLO PARA DEFINICIONES, NO IRA NNADA MAS QUE ESO

export interface Sub {
  nick: string;
  avatar: string;
  subMonths: number;
  //CON EL ? EN DESCRIPTION, ESTOY INDICANDO QUE LA PROPIEDAD ES OPCIONAL
  description?: string;
}

export type SubsResponseFromApi = Array<{
  nick: string;
  months: number;
  profileUrl: string;
  description?: string;
}>;
