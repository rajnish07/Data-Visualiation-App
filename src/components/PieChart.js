import {Pie} from 'react-chartjs-2';
import {Chart, registerables} from 'chart.js';
import { useState } from 'react';
import EditChart from './EditChart';
import {useSelector} from 'react-redux';
Chart.register(...registerables)

function PieChart({elements}){

    const colors = useSelector(state => state.colors);

    const [edit , setEdit] = useState(false);
    const [editData, setEditData] = useState({});

    const editChart = (index) => {
        let data = {
            type: 'Pie',
            title: `Chart${index+1}`,
            id: elements[index].id,
            elements: elements[index].elements
        }
        setEditData(data);
        setEdit(true);
    }

    const closeDialog =() => {
        setEdit(false);
    }

    return <div className='chart'>
        <div>
            {edit && <EditChart data={editData} close={closeDialog}/>}
                <div>
                <Pie
                title="PieChart"
                width={800}
                height={400}
                data={{
                    datasets: elements.map((ele, index) => {
                        return {
                        "data": ele.elements,
                        "backgroundColor": colors.slice(0, ele.length)
                        } 
                    })
                }}
                options={
                    {maintainAspectRatio: false}
                }
                />
                </div>
                <div>{elements.map((cb, index) => <button key={index} onClick={() => editChart(index)}>{`EditChart${index+1}`}</button>)}</div>
        </div>
        
    </div>
}

export default PieChart;
