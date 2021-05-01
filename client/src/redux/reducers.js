import {
  GET_COUNTRY,
  SEARCH_COUNTRY,
  GET_DETAILCOUNTRY,
  GET_ACTIVITY,
  SEARCH_ACTIVITY,
  GET_DETAILACTIVITY,
  POST_ACTIVITY,
  FILTER_COUNTRY,
  ORDER_COUNTRY,
} from "./actions";

const initialState = {
  countries: [],
  continent: [],
  country: {},
  activity: {},
  countriesData: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      const continentSet = new Set(
        action.payload && action.payload.map((item) => item.region)
      );

      const continentArray = Array.from(continentSet); // creo la lista de los continentes con el FROM
      // uso el onchange para referencia por valor y no por click.

      const continentArrayClear = continentArray.slice(0, 6); // limpio la ultima opcion vacia que aparecia que ya venia de la api

      return {
        ...state,
        countries: [...action.payload],
        continent: [...continentArrayClear],
        countriesData: [...action.payload],
      };

    case SEARCH_COUNTRY:
      const validate = Array.isArray(action.payload); // reviso si es un array
      return {
        ...state,
        countries: validate ? action.payload : state.countries,
      };

    case GET_DETAILCOUNTRY:
      return { ...state, country: { ...action.payload } };

    case GET_ACTIVITY:
      return { ...state, activity: { ...action.payload } };

    case SEARCH_ACTIVITY:
      Array.isArray(action.payload);
      const searchActValidate = Array.isArray(action.payload);
      return {
        ...state,
        prop1: searchActValidate ? action.payload : state.prop1,
      };

    case GET_DETAILACTIVITY:
      return { ...state, country: { ...action.payload } };

    case POST_ACTIVITY:
      return { ...state, activity: { ...action.payload } };

    case FILTER_COUNTRY:
      return { ...state, countries: [...action.payload] };

    case ORDER_COUNTRY:
      return { ...state, countries: [...action.payload] };

    default:
      return state;
  }
};
export default reducers;
