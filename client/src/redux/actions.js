import { filtrado, ordenado } from "../utils";
import axios from "axios";

export const GET_COUNTRY = "get_Country";
export const SEARCH_COUNTRY = "search_Country";
export const GET_DETAILCOUNTRY = "get_DetailCountry";
export const ORDER_COUNTRY = "order_country";
export const FILTER_COUNTRY = "filter_country";
export const GET_ACTIVITY = "get_Activity";
export const SEARCH_ACTIVITY = "search_activity";
export const GET_DETAILACTIVITY = "detail_activity";
export const POST_ACTIVITY = "post_activity";

export function getCountry() {
  return function (dispatch) {
    return fetch(`http://localhost:3001/countries`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_COUNTRY, payload: json });
      });
  };
}

export function searchCountry(name) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/countries?name=${name}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: SEARCH_COUNTRY, payload: json });
      });
  };
}
export function getDetailCountry(id) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/countries/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({ type: GET_DETAILCOUNTRY, payload: json }); // le mando el primer resultado, siempre va a ser 1
      });
  };
}

export function filtradoAction(data, opciones) {
  return async function (dispatch) {
    filtrado(data, opciones).then((data) =>
      dispatch({ type: FILTER_COUNTRY, payload: data })
    );
  };
}

export function ordenadoAction(data, opciones) {
  return async function (dispatch) {
    ordenado(data, opciones).then((data) =>
      dispatch({ type: ORDER_COUNTRY, payload: data })
    );
    // falta el reducers, componentes, filtrado y pagina detalle, formulario controlado, el temperamento tmabien
  };
}

export function getActivity() {
  return function (dispatch) {
    return fetch(`http://localhost:3001/turisticactivity`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_ACTIVITY, payload: json });
      });
  };
}

export function searchActivity(name) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/turisticactivity?name=${name}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: SEARCH_ACTIVITY, payload: json });
      });
  };
}

export function postActivity(form) {
  return function (dispatch) {
    return axios
      .post(`http://localhost:3001/turisticactivity/`, form)
      .then((response) => {
        dispatch({ type: POST_ACTIVITY, payload: response.data });
      });
  };
}
