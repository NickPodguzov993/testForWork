export type GeneralInfo = {
  equipmentCosts: number
  estimatedProfit: number
  id: number
  machineOperatorSalary: number
  mainCosts: number
  materials: number
  mimExploitation: number
  overheads: number
  rowName: string
  salary: number
  supportCosts: number
  total: number
  child: GeneralInfo[]
}

export type DefaultRowPropsT = {
  data: GeneralInfo
  setData: React.Dispatch<React.SetStateAction<any[]>>
  parent?: GeneralInfo
  isChildren?: number
  parentIsEdit?: boolean
}
