export const ADD_BARCHARTDATA = "Add_BarChartData";
export const ADD_PIECHARTDATA = "Add_PieChartData";
export const EDIT_BARCHART = "Edit_BarChart";
export const EDIT_PIECHART = "Edit_PieChart";


export const addBarChart = (chartData) =>{
    return {
        type: ADD_BARCHARTDATA,
        payload: chartData
    }
}

export const addPieChart = (chartData) =>{
    return {
        type: ADD_PIECHARTDATA,
        payload: chartData
    }
}

export const editBarChart = (chartData) => {
    return {
        type: EDIT_BARCHART,
        payload: chartData
    }
}

export const editPieChart = (chartData) => {
    return {
        type: EDIT_PIECHART,
        payload: chartData
    }
}
