import { connect } from 'react-redux'
import './sort-panel-styles.css'
import action from './action'



const SortPanel=(props: any)=>{

    return (
        <>
            <div className='panel-title'>Сортировка</div>
            <div className='panel-buttons-group'>
                <button className='panel-buttons-group__button_city' onClick={()=>props.sortByCityClicked()}>по городу</button>
                <button className='panel-buttons-group__button_company' onClick={()=>props.sortByCompanyClicked()}>по компании</button>
            </div>
        </>
    )

}


const mapDispatchToProps = (dispatch: any) => {
    return {
        sortByCityClicked: ()=> dispatch(action.sortByCityAction()),
        sortByCompanyClicked: ()=> dispatch(action.sortByCompanyAction())
    }

} 


export default connect(null, mapDispatchToProps)(SortPanel)