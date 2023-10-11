import { GeneralInfo } from '../Components/MainPart/MainPart.types'

export type UpdateRowPropsT = {
  data: Omit<GeneralInfo, 'total' | 'child'>
  rId: number | null
}
export type CreateRowPropsT = {
  data: Omit<GeneralInfo & { parentId: number | null }, 'id' | 'total' | 'child'>
}
