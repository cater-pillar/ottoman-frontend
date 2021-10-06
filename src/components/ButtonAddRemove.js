

const ButtonAddRemove = ({info, /* arr, i, */ add, remove, btnEnable}) => {

    
    return (
        <table className="table ">
                <tbody><tr>
                    <td>
                        add another {info}
                    </td>
                    <td>
                        remove last {info} 
                    </td>
                </tr>
                <tr>
                    <td>
                        <button type="button" 
                                className="btn btn-primary btn-sm"
                                onClick={add}
                                id={`${info}-add`}>
                                    +
                        </button>
                    </td>
                    <td>
                        <button type="button" 
                                className="btn btn-danger btn-sm"
                                onClick={remove}
                                id={`${info}-remove`}
                                disabled={btnEnable > 0 ? false : true}>
                                    X
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default ButtonAddRemove
