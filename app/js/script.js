const form = document.querySelector('.form__values');
const clearBtn = document.querySelector('.header__clear-btn');
const resultSection = document.querySelector('.result');
const monthlyValue = document.querySelector('.result__completed--group__display__repay-monthly-value');
const overallValue = document.querySelector('.result__completed--group__display__repay-overall-value');
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.onkeydown = function(e) {
    if (e.key === "F12") return false;
    if (e.ctrlKey && e.shiftKey && e.key === 'I'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.shiftKey && e.key === 'J'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.key === 'U'.charCodeAt(0)) return false;
}; 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = parseFloat(document.getElementById("mortgage-amount").value);
    const term = parseFloat(document.getElementById("mortgage-term").value);
    const rate = parseFloat(document.getElementById("mortgage-interest").value) / 100;
    const type = document.querySelector('input[name="mortgage-type"]:checked')?.id;
    const monthlyRate = rate / 12;
    const numberOfPayments = term * 12;
    let monthlyRepayment = 0;
    let totalRepay = 0;
    if (type === 'repayment') {
        monthlyRepayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        totalRepay = monthlyRepayment * numberOfPayments;
    } else {
        monthlyRepayment = (amount * rate) / 12;
        totalRepay = (monthlyRepayment * numberOfPayments); 
    }
    monthlyValue.textContent = `£${monthlyRepayment.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    overallValue.textContent = `£${totalRepay.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    resultSection.classList.add('is-active');
});
clearBtn.addEventListener('click', () => {
    form.reset();
    resultSection.classList.remove('is-active');
    monthlyValue.textContent = '';
    overallValue.textContent = '';
});