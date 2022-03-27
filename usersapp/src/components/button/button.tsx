import './style.scss'

export type PropsTypes = {
    onClick?: () => void,
    type?: "button" | "submit" | "reset"
    disabled?: boolean,
    style?: any,
    children?: any
}

export const ButtonComponent = (props: PropsTypes) => {
    let styleMod = props.disabled ? "button-component_disabled" :
        props.type === "submit" ? "button-component_submit" : null

    const onClick = () => {
        if (!props.disabled && props.onClick) {
            props.onClick()
        }
    }

    return (
        <button disabled={props.disabled} style={{ ...props.style }} className={"button-component " + styleMod}
            type={props.type} onClick={onClick}>
            {props.children}
        </button>
    )
}

export default ButtonComponent