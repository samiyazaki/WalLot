const ctx = document.getElementById('myChart');
const cv1 = document.getElementById('need-income').textContent;
const cv2 = document.getElementById('wants').textContent;
const cv3 = document.getElementById('savings').textContent;
const cv4 = document.getElementById('savings').textContent;

// Remove once pulling data from database
const dummyData = [10, 10, 50, 30];
const dbData = [cv1, cv2, cv3, cv4];

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