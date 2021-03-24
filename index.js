//random from x to 59
const generateNumber = ((x=35) => {
	
	const maxmin = 59;
	let mult, res;
	let y = Math.random();
	let z = Math.random();

	y = y*10; y = Math.round(y++) // random 1-10 number
	
	z = z*2;
	z = Math.round(z);
	mult = z ? 2 : 3; // random 2/3 multiplier

	res = x+y*mult;
	res = (res > maxmin) ? generateNumber(x) : res; // recur if too much

	return res;	
})

let target = generateNumber(); // get your num

((m) => {
    setInterval(() => {
        const elements = document.getElementsByClassName('tm-popup-notice-time-minutes');
        if (elements.length) {
            const mins = elements[1].textContent;            
            if (mins > m) {
                const btn = document.getElementsByClassName('tm-btn-start');
                btn[0].click();
            }
        }
    }, 30000)
})(target);
