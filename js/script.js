const scoreRadioChoices = document.querySelectorAll('input[name="ratings"]');
const submitBtn = document.querySelector('.submit-btn');

let currentScoreVal = 0;



const updateScoreVal = function (e) {
    currentScoreVal = e.currentTarget.value;
    
}

for (const scoreRadioChoice of scoreRadioChoices) {
    scoreRadioChoice.addEventListener('click', updateScoreVal);
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();


    const scorePara = document.querySelector('.thank-you-score');
    const thankYouCard = document.querySelector('.thank-you-card');
    const ratingsCard = document.querySelector('.ratings-card');

    scorePara.textContent = `You selected ${currentScoreVal} out of 5`;
    thankYouCard.classList.toggle('hide');
    ratingsCard.classList.toggle('hide');
})