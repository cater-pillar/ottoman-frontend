
export const SubmitButton = () => {
    return (
        <div className="form-group 
                    d-flex 
                    flex-row-reverse">
            
            <button type="button" 
                    className="btn btn-success" 
                    data-toggle="modal" 
                    data-target="#createModal">
                        Submit
            </button>
        </div>
    )
}

export default SubmitButton
