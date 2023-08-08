import React from 'react'
import { connect } from 'react-redux'

const DisplayCount = ({data}) => {
  return (
    <div className='shadow-sm border border-0'>
        <h4> number of todos : 45</h4>

    </div>
  )
}
const mapStateToProps=(state)=>({todo:state.data})
const mapDispatchToProps = (dispatch)=>({

})
export default connect(mapDispatchToProps,mapStateToProps)(DisplayCount); 