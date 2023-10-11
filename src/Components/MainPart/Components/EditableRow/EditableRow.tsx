import { ChangeEvent, FC, memo, useEffect, useState } from 'react'
import style from './EditableRow.module.scss'
import { createRow, updateRow } from '../../../../api/request'
import { GeneralInfo } from '../../MainPart.types'

type UpdateFunctionT = (arr: GeneralInfo[]) => GeneralInfo[]

type EditableRowPropsT = {
  data?: GeneralInfo
  setData: React.Dispatch<React.SetStateAction<any[]>>
  parent?: GeneralInfo
  close?: () => void
}

const emptyData = {
  equipmentCosts: 0,
  estimatedProfit: 0,
  machineOperatorSalary: 0,
  mainCosts: 0,
  materials: 0,
  mimExploitation: 0,
  overheads: 0,
  rowName: '',
  salary: 0,
  supportCosts: 0,
  total: 0,
}

const EditRow: FC<EditableRowPropsT> = ({ data, setData, parent, close }) => {
  const [editableData, setEditableData] = useState({
    rowName: data?.rowName || '',
    salary: data?.salary || 0,
    mainCosts: data?.mainCosts || 0,
    overheads: data?.overheads || 0,
    estimatedProfit: data?.estimatedProfit || 0,
  })

  const handleUpdateState = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    const newValue = name === 'rowName' ? value : +value
    setEditableData((prev) => ({ ...prev, [name]: newValue }))
  }

  const handleSendUpdate = async () => {
    try {
      if (!data) return
      const { child, total, ...other } = data
      const sendData = {
        data: { ...other, ...editableData },
        rId: data?.id || null,
      }
      const res = await updateRow(sendData)
      const newData = { ...res.current, child: child || [] }

      const updateState: UpdateFunctionT = (arr) => {
        return arr.map((item) => {
          if (item?.id === data?.id) {
            return newData
          }
          return { ...item, child: updateState(item?.child) }
        })
      }
      setData((prev) => updateState(prev))
      setEditableData(emptyData)
      close && close()
    } catch (error) {
      console.log(error)
    }
  }

  const handleCreate = async () => {
    try {
      const parentId = parent?.id || null
      const sendData = {
        data: { ...(data || emptyData), ...editableData, parentId },
      }
      const res = await createRow(sendData)
      const newData = { ...res?.current, child: [] }

      if (!parent) setData((prev) => [...prev, newData])
      else {
        const updateState: UpdateFunctionT = (arr) => {
          return arr?.map((item) => {
            if (item?.id === parent?.id) {
              const newChild = [newData, ...item?.child]
              return { ...item, child: newChild }
            }

            return { ...item, child: updateState(item?.child) }
          })
        }
        setData((prev) => updateState(prev))
      }
      close && close()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const keyPressEscEnter = ({ keyCode }: KeyboardEvent) => {
      if (keyCode === 13) data?.id ? handleSendUpdate() : handleCreate()
      if (keyCode === 27) close && close()
    }
    document.addEventListener('keydown', keyPressEscEnter)
    return () => document.removeEventListener('keydown', keyPressEscEnter)
  }, [editableData])

  return (
    <>
      {Object.entries(editableData).map(([key, value]) => (
        <input
          key={key}
          name={key}
          autoFocus={key === 'rowName'}
          className={style.editableInput}
          placeholder={value?.toString()}
          type={key === 'rowName' ? 'text' : 'number'}
          style={{ width: key === 'rowName' ? '250px' : '150px' }}
          onChange={handleUpdateState}
        />
      ))}
    </>
  )
}

export default memo(EditRow)
