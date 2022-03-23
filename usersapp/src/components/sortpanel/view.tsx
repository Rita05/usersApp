import './sort-panel-styles.css'
import {Button, Container} from '@mui/material'


const SortPanel = () => {
    return(
        // <Container className='panelcontainer'>
        <>
            <div className='panel-title'>Сортировка</div>
            <div className='panel-buttons-group'>
                <Button className='button-city'>по городу</Button>
                <Button className='button-company'>по компании</Button>
            </div>
            </>
        // </Container>
    )

}

export default SortPanel