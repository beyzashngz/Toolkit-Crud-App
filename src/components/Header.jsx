
import { NavLink } from 'react-router-dom'
import { toggleTheme } from '../redux/slices/counterSlice'
import { useDispatch } from 'react-redux'

const Header = () => {
    const dispatch = useDispatch();

  return (
    <header className='mb-3 p-4'>
        <div className='container d-flex justify-content-between'>
        <h2>TOOLKIT</h2>

        <nav className='d-flex align-items-center gap-3'>
            <NavLink to={"/"}>Sayaç</NavLink>
            <NavLink to={"/crud"}>Crud</NavLink>

            <button onClick={() => dispatch(toggleTheme())}>Tema Değiştir</button>
        </nav>
        </div>
    </header>
  )
}

export default Header