const ctx = document.getElementById('myChart');

const cv1 = document.getElementById('wants').textContent.split(',').join('');
const cv2 = document.getElementById('needs').textContent.split(',').join('');
const cv3 = document.getElementById('savings').textContent.split(',').join('');
const cv4 = .5*cv3;

// Remove once pulling data from database
// const dummyData = [10, 10, 50, 30];
const dbData = [cv1, cv2, cv3, cv4];

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Wants', 'Needs', 'Total Savings', 'Goal Savings'],
        datasets: [{
            label: 'Relative Income Distribution (in $)',
            data: dbData,
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