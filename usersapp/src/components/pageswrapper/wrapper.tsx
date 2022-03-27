import SortPanel from '../sortpanel/sortpanel'
import './style.css'

export const PageWrapper = (props: any) => {
    return (
    <div className="page_container">
        <div className="sort_container">
            <SortPanel />
        </div>
        <div className="users_container">
            {props.children}
        </div>
    </div>
    )

}

export default PageWrapper