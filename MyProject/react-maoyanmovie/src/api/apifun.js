import URL from "./apiManger";
import axios from './axios'

export function getmovieonshowlist() {
  return axios.get(`${URL.movielistonshowapi}`).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
}

export function getmoviewillshowlist() {
  return axios.get(`${URL.movielistwillshowapi}`).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
}