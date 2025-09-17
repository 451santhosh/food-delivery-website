import React from 'react'
import { menu_list } from '../fassets/assets'
import './exploremenu.css'

const Exploremenu = ({category,setCategory}) => {
  return (
    
       
    <div className='container-fluid mt-5 mb-2' id='explore-menu'>

        <div className='explore-menu'>

          <h1>Explore Our Menu</h1>
         <p className='mt-1 fw-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nostrum reiciendis enim aperiam explicabo, iste fugit impedit ea quam!</p>
        </div>
       <div className='align-items-center justify-content-space-between d-flex m-5 mx-3 my-2 p-3 explore-menu-list'>
         {
             
            menu_list.map((item,index)=>{
              return(
                <div  className="explore-menu-list-item"onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index}>
                 <img  className={category===item.menu_name?"active":""} src={item.menu_image} alt=''/>
                 <p>{item.menu_name}</p>
                </div>
              )
            })
         }
       </div>
    </div>
     
  )
}

export default Exploremenu
