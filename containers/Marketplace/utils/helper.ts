const getCurrency = (amount: number) => {
    return amount.toLocaleString('en-US', { 
		style: 'currency', 
		currency: 'USD' 
	});
}

const getFormattedDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const result = `${month}/${date}/${year}`;
    return result;
}

export {
    getCurrency,
    getFormattedDate
};

