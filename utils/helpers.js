module.exports = {
    savings: (salary) => {
      return Math.floor((salary * 20) / 100);
    },

    housing: (salary) => {
        return Math.floor((salary * 20) / 100);
    },

    utilities: (salary) => {
        return Math.floor((salary * 5) / 100);
    },

    transportation: (salary) => {
        return Math.floor((salary * 10) / 100);
    },

    grocery: (salary) => {
        return Math.floor((salary * 5) / 100);
    }, 

    insurance: (salary) => {
        return Math.floor((salary * 5) / 100);
    },

    eatingOut: (salary) => {
        return Math.floor((salary * 5) / 100);
    }, 

    clothing: (salary) => {
        return Math.floor((salary * 3) / 100);
    },

    entertainment: (salary) => {
        return Math.floor((salary * 2) / 100);
    },

    vacation: (salary) => {
        return Math.floor((salary * 10) / 100);
    },

    hobbies: (salary) => {
        return Math.floor((salary * 5) / 100);
    },
   
};

var calculateCar= getElementById("carAmountInput");

const iterations = calculateCar(salary, calculateCar);
console.log(iterations); 