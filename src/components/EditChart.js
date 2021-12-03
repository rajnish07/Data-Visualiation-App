import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { useEffect, useState } from "react";
import * as actions from '../redux/actions';
import store from '../redux/store';

function EditChart({ data, close }) {
    const [editData, setEditData] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        let temp = {};
        if(data){data.elements.forEach((ele, ind) => {
            temp[`Val${ind + 1}`] = ele
        })
        setEditData(temp);
    }
    },[data])

    const handleChange = (e) => {
        let temp = {...editData};
        temp[e.target.id] = Number(e.target.value);
        setEditData(temp)
    }

    const handleSave = () => {
        if(data.type === 'Pie'){
            let sum = 0;
            for(const item in editData){
                sum += editData[item];
            }
            if(sum !== 100) {
                setError("Total should sum to 100");
            }
            else{
            setError("");
            store.dispatch(actions.editPieChart({id:data.id, elements:Object.values(editData)}));
            close();
            }
        }
        else{
        store.dispatch(actions.editBarChart({id:data.id, elements:Object.values(editData)}));
        close()
        }
    }

    return <div className="container">
        {
            editData &&
            <Dialog onDismiss={close} aria-label={'edit chart data'}>
                <h2>Edit {data.title}</h2>
                <hr />
                {data.elements.map((item, index) => (
                    <div key={index}>
                        <label>{`Val ${index + 1}`}</label><br />
                        <input id={`Val${index + 1}`} value={editData[`Val${index+1}`]} onChange={(evt) => handleChange(evt)} /><br /><br />
                    </div>
                ))}
                <br />
                {error && <><small className="err">{error}</small><br/></> }
                <button onClick={handleSave}>Save</button>
            </Dialog>
        }
    </div>

}

export default EditChart;
