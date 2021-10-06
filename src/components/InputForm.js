import {useState} from 'react'

import FormGroupSelect from "./FormGroupSelect"
import FormGroupInput from "./FormGroupInput"
import ButtonAddRemove from "./ButtonAddRemove"
import SubmitButton from "./SubmitButton"

const InputForm = ({selectData, funcArr}) => {
    
    const [occupationArray, setOccupationArray] = useState([])
    const [taxArray, setTaxArray] = useState([])
    const [landArray, setLandArray] = useState([])
    const [realEstateArray, setRealEstateArray] = useState([])
    const [livestockArray, setLivestockArray] = useState([])

    const addInput = (arr, set)=> {
     if (arr.length === 0) {
        set([1])
        }    else {
            set([...arr, arr.length+1])
        }
    }
    const removeInput = (arr, set)=> {
        if (arr.length !== 0) {
            arr.pop();
            set([...arr])
        }
    }

    return (
        
        <form method="POST" action="#">
            <h2>Location</h2>
            <FormGroupSelect select={selectData[0]}
                       formName="location"
                       labelText="Select Location Name"/>
            <h2>Household Member</h2>
            <FormGroupInput formName="forname"
                       labelText="Add Forname"
                       formType="text"/>
            <FormGroupInput formName="surname"
                            labelText="Add Surname"
                            formType="text"/>
            <FormGroupSelect select={selectData[1]}
                            formName="member_type"
                            labelText="Select Household Member Position"/> 
            <FormGroupInput formName="household_number"
                            labelText="Add Household Number"
                            formType="number"/>
            
            <h2>Occupation</h2>

            {occupationArray.map((item) => (
            <div key={item}>
            <FormGroupSelect select={selectData[2]}
                            formName={`occupation${item}`}
                            labelText={`Select Occupation ${item}`}/>
            <FormGroupInput formName={`occupation-income${item}`}
                            labelText="Add Occupation Income"
                            formType="number"/>
            <FormGroupSelect select={[{id:'1', name:'usta'}, 
                                      {id:'2', name:'kalfa'}, 
                                      {id:'3', name:'cirak'}]}
                            formName="occupation-proficiency"
                            labelText="Choose Level of Proficiency:"/>
            </div>))
                }
            <ButtonAddRemove info="occupation"
                             btnEnable={occupationArray.length}
                             add = {() => addInput(occupationArray, setOccupationArray)}
                             remove ={() => removeInput(occupationArray, setOccupationArray)} />

            <h2>Tax</h2>
            {taxArray.map((item) => (
            <div key={item}>
            <FormGroupSelect select={selectData[3]}
                            formName={`tax${item}`}
                            labelText={`Select Tax ${item}`}/>
            <FormGroupInput formName={`tax-amount${item}`}
                            labelText="Add Tax Amount"
                            formType="number"/>
            </div>))
                }
            <ButtonAddRemove info="tax"
                             add = {() => addInput(taxArray, setTaxArray)}
                             remove ={() => removeInput(taxArray, setTaxArray)} />

            <h2>Land</h2>
            {landArray.map((item) => (
            <div key={item}>
            <FormGroupSelect select={selectData[4]}
                            formName={`land${item}`}
                            labelText={`Select Land ${item}`}/>
            <FormGroupInput formName={`land-area${item}`}
                            labelText="Add Area"
                            formType="number"/>
            <FormGroupInput formName={`land-income${item}`}
                            labelText="Income from Land"
                            formType="number"/>
            <FormGroupInput formName={`land-rent${item}`}
                            labelText="Rent Payed to the Owner"
                            formType="number"/>
            </div>))
                }
            <ButtonAddRemove info="land"
            add = {() => addInput(landArray, setLandArray)}
            remove ={() => removeInput(landArray, setLandArray)} />

            <h2>Real Estate</h2>
            {realEstateArray.map((item) => (
            <div key={item}>
            <FormGroupSelect select={selectData[5]}
                            formName={`real-estate${item}`}
                            labelText={`Select Real Estate ${item}`}/>
            <FormGroupInput formName={`real-estate-quantity${item}`}
                            labelText="Add Number of Real Estate"
                            formType="number"/>
            <FormGroupInput formName={`real-estate-income${item}`}
                            labelText="Income from Real Estate"
                            formType="number"/>
            </div>))
                }
            <ButtonAddRemove info="real-estate"
            add = {() => addInput(realEstateArray, setRealEstateArray)}
            remove ={() => removeInput(realEstateArray, setRealEstateArray)} />

            <h2>Livestock</h2>
            {livestockArray.map((item) => (
            <div key={item}>
            <FormGroupSelect select={selectData[6]}
                            formName={`livestock${item}`}
                            labelText={`Select Livestock ${item}`}/>
            <FormGroupInput formName={`livestock-quantity${item}`}
                            labelText="Add Number of Livestock Owned"
                            formType="number"/>
            <FormGroupInput formName={`livestock-income${item}`}
                            labelText="Income from Livestock"
                            formType="number"/>
            </div>))
                }
            <ButtonAddRemove info="livestock"
            add = {() => addInput(livestockArray, setLivestockArray)}
            remove ={() => removeInput(livestockArray, setLivestockArray)} />

            <SubmitButton />
        </form >
    )
}

export default InputForm
