
const Div = (props) => {
    const { children, className, style } = props;
    return (
        <div className={className} style={style}>
            { children }
        </div>
    )
}

export default Div;