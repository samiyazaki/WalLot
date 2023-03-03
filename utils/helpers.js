module.exports = {
    savings: (income) => {
      return (Math.floor((income * 20) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    housing: (income) => {
        return (Math.floor((income * 20) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    utilities: (income) => {
        return (Math.floor((income * 5) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    transportation: (income) => {
        return (Math.floor((income * 10) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    grocery: (income) => {
        return (Math.floor((income * 5) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }, 

    insurance: (income) => {
        return (Math.floor((income * 5) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    eatingOut: (income) => {
        return (Math.floor((income * 5) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }, 

    clothing: (income) => {
        return (Math.floor((income * 3) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    entertainment: (income) => {
        return (Math.floor((income * 2) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    vacation: (income) => {
        return (Math.floor((income * 10) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    hobbies: (income) => {
        return (Math.floor((income * 5) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    needs: (income) => {
        return (Math.floor((income * 50) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    wants: (income) => {
        return (Math.floor((income * 30) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    goalSavings: (income) => {
        return (Math.floor((income * 10) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    years: (income, amount) => {
        return Math.ceil(amount / ((income * 10) / 100));
    },

    convert: (income) => {
        return income.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },

};
