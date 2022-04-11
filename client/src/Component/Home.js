import React,{useContext} from 'react'
import { ProjectContext } from '../Context/GlobalContext'

const Home = () => {
    const {Add,Minus,value} = useContext(ProjectContext)
  return (
    <div>
        <div className='value-edit'>{value}</div>
        <button className='btn btn-primary' onClick={Add}>+</button>
        <button className='btn btn-danger' onClick={Minus}>-</button>
    </div>
  )
}

export default Home