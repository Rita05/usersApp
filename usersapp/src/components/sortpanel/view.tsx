import './sort-panel-styles.css'

const SortPanel = () => {
    return(
        <>
            <div className='panel-title'>Сортировка</div>
            <div className='panel-buttons-group'>
                <button className='button-city'>по городу</button>
                <button className='button-company'>по компании</button>
            </div>
            </>
    )

}

export default SortPanel