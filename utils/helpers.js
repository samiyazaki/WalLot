module.exports = {
    savings: (income) => {
      return Math.floor((income * 20) / 100);
    },

    housing: (income) => {
        return Math.floor((income * 20) / 100);
    },

    utilities: (income) => {
        return Math.floor((income * 5) / 100);
    },

    transportation: (income) => {
        return Math.floor((income * 10) / 100);
    },

    grocery: (income) => {
        return Math.floor((income * 5) / 100);
    }, 

    insurance: (income) => {
        return Math.floor((income * 5) / 100);
    },

    eatingOut: (income) => {
        return ((income * 5) / 100);
    }, 

    clothing: (income) => {
        return ((income * 3) / 100);
    },

    entertainment: (income) => {
        return ((income * 2) / 100);
    },

    vacation: (income) => {
        return ((income * 10) / 100);
    },

    hobbies: (income) => {
        return ((income * 5) / 100);
    },

    needs: (income) => {
        return ((income * 50) / 100);
    },

    wants: (income) => {
        return ((income * 30) / 100);
    },

    goalSavings: (income) => {
        return ((income * 10) / 100);
    },

    years: (income, amount) => {
        return Math.floor(((amount * 10) / 10) / income);
    }

};
