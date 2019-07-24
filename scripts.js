const calculateMonthlyRepayment = (rate, years, principal) => {
  const rateInPercentage = rate / 100 / 12;
  const numberOfPayments = years * 12;
  const numerator =
    rateInPercentage * Math.pow(1 + rateInPercentage, numberOfPayments);
  const denominator = Math.pow(1 + rateInPercentage, numberOfPayments) - 1;
  return Math.round(principal * (numerator / denominator));
};

window.onload = function() {
  const mortgageForm = document.querySelector("#mortgageForm");

  mortgageForm.addEventListener("submit", event => {
    event.preventDefault();

    const amountField = document.querySelector("#amount");
    const amountToBorrow = amountField.value;
    const paymentPeriodField = document.querySelector("#paymentPeriodInYears");
    const paymentPeriodInYears = paymentPeriodField.value;
    const monthlyRepayment = calculateMonthlyRepayment(
      7,
      paymentPeriodInYears,
      amountToBorrow
    );

    const offer =
      "You will be paying &pound;" + monthlyRepayment + " per month";
    document.querySelector("#mortgage-offer").innerHTML = offer;
  });
};
