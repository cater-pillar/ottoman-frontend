

const FormGroupSelect = ({select, formName, labelText}) => {
    return (
        <div className="form-group">
            <label htmlFor={formName}>{labelText}</label>
            <select id={formName} name={formName} className="form-control">
            {select.map((a) => 
                <option key={a.id} 
                        value={a.id}>
                            {a.name}
                            {a.hasOwnProperty('name_en') ? `/${a.name_en}` : ''}
                </option>
            )}
            </select>  
        </div>
    )
}

export default FormGroupSelect
