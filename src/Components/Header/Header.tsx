
import style from './Header.module.scss'
import { MenuIcon } from '../../assets/MenuIcon'
import { ArrowIcon } from '../../assets/ArrowIcons'

const Header = () => {
  return (
    <div>
      <header className={style.header}>
        <MenuIcon className={style.iconMenu} />
        <ArrowIcon className={style.iconMenu} />
        <p className={style.headerSpan}>Просмотр</p>
        <p className={style.headerSpanTwo}>Управление</p>
      </header>
    </div>
  )
}

export default Header
