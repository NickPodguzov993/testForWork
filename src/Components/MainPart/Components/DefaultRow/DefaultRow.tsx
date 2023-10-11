import { FC, memo, useCallback, useEffect, useState } from 'react'
import style from './DefaultRow.module.scss'
import { Icon } from '../../../../assets/Icon'
import EditRow from '../EditableRow/EditableRow'
import { removeRow } from '../../../../api/request'
import { TrashIcon } from '../../../../assets/TrashIcon'
import { DefaultRowPropsT, GeneralInfo } from '../../MainPart.types'

const DefaultRow: FC<DefaultRowPropsT> = ({
  data,
  isChildren = 0,
  parentIsEdit = false,
  setData,
  parent,
}) => {
  const { child, ...other } = data

  const [isEdit, setIsEdit] = useState(false)
  const [isOpenChild, setIsOpenChild] = useState(true)
  const [isCreate, setIsCreate] = useState(false)

  const viewChildren = isOpenChild && child.length > 0
  const childrenLine = isChildren > 0 ? style.toolsOpenStart : ''
  const edit = isEdit && !parentIsEdit

  const visibleData = {
    rowName: other.rowName || '',
    salary: other.salary || 0,
    mainCosts: other.mainCosts || 0,
    overheads: other.overheads || 0,
    estimatedProfit: other.estimatedProfit || 0,
  }

  const closeEdit = () => setIsEdit(false)
  const closeCreate = () => setIsCreate(false)

  const handleCreate = () => {
    if (isEdit || parentIsEdit) return
    setIsCreate((prev) => !prev)
  }

  const handleDelete = useCallback(async () => {
    try {
      await removeRow({ rId: data?.id })
      const removeState = (arr: GeneralInfo[]) => {
        return arr.reduce((acc: GeneralInfo[], item) => {
          if (item?.id === data?.id) return acc
          acc.push({ ...item, child: removeState(item?.child) })
          return acc
        }, [])
      }
      setData((prev) => removeState(prev))
      setIsOpenChild(false)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const createShortString = (value: string | number) => {
    const currValue = value.toString()
    return `${currValue.slice(0, 25)} ${currValue.slice(25).length > 0 ? '...' : ''}`
  }

  let timer: any
  const handleClick = () => {
    if (typeof timer !== 'undefined') {
      clearTimeout(timer)
      timer = undefined
      setIsCreate(false)
      setIsEdit((prev) => !prev)
    } else {
      timer = setTimeout(() => {
        timer = undefined
        setIsOpenChild((prev) => !prev)
      }, 350)
    }
  }

  useEffect(() => {
    setIsEdit(false)
    setIsCreate(false)
  }, [parentIsEdit])

  return (
    <>
      <div
        className={`${style.tools} ${childrenLine}`}
        style={{ marginLeft: 28 * isChildren }}
      >
        <Icon onClick={handleCreate} />
        <TrashIcon onClick={handleDelete} />
      </div>

      <div className={style.body} onClick={handleClick}>
        {edit ? (
          <EditRow setData={setData} parent={parent} close={closeEdit} data={data} />
        ) : (
          Object.values(visibleData).map((value, index) => (
            <p key={index}>{createShortString(value)}</p>
          ))
        )}
      </div>

      {isCreate && !edit && (
        <>
          <div
            className={`${style.tools} ${style.toolsOpenStart}`}
            style={{ marginLeft: 28 * (isChildren + 1) }}
          >
            <Icon />
            <TrashIcon onClick={closeCreate} />
          </div>
          <div className={style.body}>
            <EditRow parent={data} setData={setData} close={closeCreate} />
          </div>
        </>
      )}

      {viewChildren &&
        child.map((children) => (
          <DefaultRow
            key={children.id}
            setData={setData}
            parent={data}
            parentIsEdit={isEdit || isCreate || parentIsEdit}
            isChildren={isChildren + 1}
            data={children}
          />
        ))}
    </>
  )
}

export default memo(DefaultRow)
