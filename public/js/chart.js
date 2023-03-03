const ctx = document.getElementById('myChart');
// Remove once pulling data from database
const dummyData = [10, 10, 50, 30];
const dbData = ['goal savings amount', 'general savings amount', 'Needs amount', 'Wants Amount'];
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Goal Savings', 'General Savings', 'Needs', 'Wants'],
        datasets: [{
            label: 'Relative Income Distribution',
            data: dummyData,
            borderWidth: 10
        }]
    },
    options: {
        backgroundColor: ['red', 'green', 'yellow', 'pink'],
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});