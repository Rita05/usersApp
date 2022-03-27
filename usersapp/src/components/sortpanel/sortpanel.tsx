import { connect } from 'react-redux'
import './style.scss'
import action from './action'
import Button from '../button/button'

export type PropsTypes = {
    sortByCityClicked: () => void,
    sortByCompanyClicked: () => void
}

const SortPanel = (props: PropsTypes) => {
    return (
        <>
            <div className='panel-title'>Сортировка</div>
            <div className='panel-buttons-group'>
                <Button style={{ marginTop: "10.05px" }} onClick={props.sortByCityClicked}>
                    по городу
                </Button>
                <Button style={{ marginTop: "10.05px", width: "105.39px" }} onClick={props.sortByCompanyClicked}>
                    по компании
                </Button>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch: any): PropsTypes => {
    return {
        sortByCityClicked: () => dispatch(action.sortByCityAction()),
        sortByCompanyClicked: () => dispatch(action.sortByCompanyAction())
    }

}

export default connect<null, PropsTypes>(null, mapDispatchToProps)(SortPanel)