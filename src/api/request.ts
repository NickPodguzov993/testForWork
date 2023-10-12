import http from './http'
import { CreateRowPropsT, UpdateRowPropsT } from './request.types'

const eId = localStorage.getItem('eID')

export const getData = async () => {
  const res = await http.get(`/v1/outlay-rows/entity/${eId}/row/list`)
  return res.data
}

export const createEssence = async () => {
  const essence = await http.post('/v1/outlay-rows/entity/create', {}, {})
  return essence.data
}

export const createRow = async ({ data }: CreateRowPropsT) => {
  const res = await http.post(`/v1/outlay-rows/entity/${eId}/row/create`, data, {})
  return res.data
}

export const updateRow = async ({ data, rId }: UpdateRowPropsT) => {
  const res = await http.post(`/v1/outlay-rows/entity/${eId}/row/${rId}/update`, data)
  return res.data
}

export const removeRow = async ({ rId }: { rId: number }) => {
  const res = await http.remove(`/v1/outlay-rows/entity/${eId}/row/${rId}/delete`, {})
  return res.data
}
