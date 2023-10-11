import { useEffect, useState } from 'react'
import style from './MainPart.module.scss'
import DefaultRow from './Components/DefaultRow/DefaultRow'
import { createEssence, getData } from '../../api/request'
import EditRow from './Components/EditableRow/EditableRow'
import { Icon } from '../../assets/Icon'
import { GeneralInfo } from './MainPart.types'

const MainPart = () => {
  const [data, setData] = useState<GeneralInfo[]>([])

  const fetchData = async () => {
    try {
      const res = await getData()
      setData(res)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchEssence = async () => {
    try {
      const res = await createEssence()
      localStorage.setItem('eID', res?.id)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const eId = localStorage.getItem('eID')
    if (!eId) fetchEssence()
    fetchData()
  }, [])

  return (
    <div>
      <p className={style.titleMain}>Строительно-монтажные работы</p>
      <div className={style.body}>
        <p>Уровень</p>
        <div className={style.head}>
          <p>Наименование работ</p>
          <p>Основная з/п</p>
          <p>Оборудование</p>
          <p>Накладные расходы</p>
          <p>Сметная прибыль</p>
        </div>
        {data.length === 0 && (
          <>
            <Icon />
            <div className={style.flexRow}>
              <EditRow setData={setData} />
            </div>
          </>
        )}

        {data.length > 0 &&
          data.map((item) => <DefaultRow key={item.id} setData={setData} data={item} />)}
      </div>
    </div>
  )
}

export default MainPart
