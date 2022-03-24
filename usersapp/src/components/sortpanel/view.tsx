import './sort-panel-styles.css'

const SortPanel = () => {
    return (
        <>
            <div className='panel-title'>Сортировка</div>
            <div className='panel-buttons-group'>
                <button className='panel-buttons-group__button_city'>по городу</button>
                <button className='panel-buttons-group__button_company'>по компании</button>
            </div>
        </>
    )

}

export default SortPanel