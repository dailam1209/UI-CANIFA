const Styles = ['pc', 'tabnet', 'mobile'];


export const LayoutFixed = ({
    style,
    children

}) => {
    const LayoutStyle = Styles.includes(style) ? style : Styles[0];

    return (
        <div className={`${LayoutStyle}`} id="layout">
            {children}
        </div>
    )
}