import React from "react";

const useNumberPrime = (number: number) => {
	const isNumberPrimeFn = React.useCallback((): boolean => {
		for(let i = 2, s = Math.sqrt(number); i <= s; i++)
			if(number % i === 0) return false;
		return number > 1;
	}, [number])

	return {
		isNumberPrimeFn
	}
}

export default useNumberPrime