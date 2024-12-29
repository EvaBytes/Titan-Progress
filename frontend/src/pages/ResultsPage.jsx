import React from 'react';
import DonutChart from '../components/DonutChart'; 

function ResultsPage({ muscleGroupsData, movementPatternsData }) { 
    return (
    <div>
        <h1>Your Activity</h1>
        <div className="charts-container"> 
            <div className="chart-wrapper">
                <h2>Muscle Groups</h2>
                <DonutChart data={muscleGroupsData} />
            </div>
            <div className="chart-wrapper">
                <h2>Movement Patterns</h2>
                <DonutChart data={movementPatternsData} />
            </div>
        </div>
    </div>
);
}

export default ResultsPage;