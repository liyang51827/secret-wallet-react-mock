import Div from "./Div";

const FormControl = (props) => {
    const { label, type, focus, unit }  = props;
    return (
        <Div className="form-group">
            <label htmlFor={focus}>{ label }</label>
            <input type={type} id={focus} />
            <p>{unit}</p>
        </Div>
    )
}

export default FormControl;