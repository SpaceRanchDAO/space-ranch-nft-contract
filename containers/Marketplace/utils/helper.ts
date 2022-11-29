const getCurrency = (amount: number) => {
    return amount.toLocaleString('en-US', { 
		style: 'currency', 
		currency: 'USD' 
	});
}

export { getCurrency };

