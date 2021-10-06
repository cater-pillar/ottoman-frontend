const FormGroupInput = ({formType, formName, labelText}) => {
    return (
        <div className="form-group">
            <label htmlFor={formName}>{labelText}</label>
            <input type={formType} 
                   id={formName}
                   name={formName}
                   className="form-control" 
                   placeholder={formName} />
        </div>
    )
}

export default FormGroupInput