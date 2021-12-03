import {Bar} from 'react-chartjs-2';
import {Chart, registerables} from 'chart.js';
import EditChart from './EditChart';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
Chart.register(...registerables)

function BarChart({elements}){

    const [maxElem, setMaxElem] = useState(0);
    const colors = useSelector(state => state.colors);

    useEffect(() => {
        elements.forEach(element => {
            if(element.elements?.length > maxElem) setMaxElem(element.elements?.length);
        });
    })    

    const labels = [];
    for(let i=0 ;i<maxElem;i++){
        labels.push(`Chart${i+1}`);
    }

    const xValues = [];
    for(let i=0 ;i<maxElem;i++){
        xValues.push(`Val(${i+1})`);
    }
    const [edit , setEdit] = useState(false);
    const [editData, setEditData] = useState({});

    const editChart = (index) => {
        let data = {
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
        <Bar 
        title = "BarChart"
        height = {400}
        data= {{
            labels: xValues,
            datasets: elements.map((ele, index) => {
                return {
                "label": labels[index],
                "data": ele.elements,
                "backgroundColor": colors.slice(0, ele.elements?.length)
                } 
            })
        }}
        options={
            {maintainAspectRatio: false}
        }/>
        </div>
        </div>
        <div>{elements.map((cb, index) => <button key={index} onClick={() => editChart(index)}>{`EditChart${index+1}`}</button>)}</div>
    </div>
            
}

export default BarChart;
