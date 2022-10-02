import React from 'react'
import loading from './loading.gif'

// export class Spinner extends Component 
const Spinner=()=>{
  // render() {
    return (
      <div className='container text-center'>
<img src={loading}></img>
      </div>
    )
  
}

export default Spinner