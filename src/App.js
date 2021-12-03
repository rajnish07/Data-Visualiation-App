import { useEffect } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import store from './redux/store';
import {useSelector} from 'react-redux'
import * as actions from './redux/actions';

function App() {

  const pieChart = useSelector(state => state.pie.sort((e1, e2) => e1.id < e2.id ? -1 : 1));
  const barChart = useSelector(state => state.bar.sort((e1, e2) => e1.id < e2.id ? -1 : 1));

  //Get the Data from Api when App loads
  useEffect(() => {
    fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json')
    .then(response => response.json())
    .then(data => {
      let data1 = [];
      let bId = 0;
      let pId = 0;
      let data2 = [];
      data.forEach((item) => {
        if(item.type === 'Bar'){
          data1.push({id: ++bId, elements:[...item.elements]});
        }
        else{
          data2.push({id: ++pId, elements:[...item.elements]});
        }
      })
      store.dispatch(actions.addBarChart(data1))
      store.dispatch(actions.addPieChart(data2))
    });
  }, [])


  return (
    <div className="App">
      <h2>Data Visualization App</h2>
      <hr/>
      {(barChart && pieChart) && 
      <>
      <h3>Bar-Chart</h3>
      <BarChart elements={barChart} />
      <hr />
      <h3>Pie-Chart</h3>
      <PieChart elements={pieChart} /></>}
    </div>
  );
}

export default App;
