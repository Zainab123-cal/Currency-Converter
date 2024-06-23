// Get our currency converter elements
const fromCurrencySelect = document.getElementById('from-currency');
const amountInput = document.getElementById('amount');
const toCurrencySelect = document.getElementById('to-currency');
const convertButton = document.getElementById('convert-button');
const resultDiv = document.getElementById('result');

// Create an object to store our currency exchange rates
const exchangeRates = {
  USD: {
    EUR: 0.84,
    GBP: 0.76,
    JPY: 109.23,
    CNY: 6.93
  },
  EUR: {
    USD: 1.19,
    GBP: 0.90,
    JPY: 130.23,
    CNY: 8.23
  },
  GBP: {
    USD: 1.32,
    EUR: 1.11,
    JPY: 144.23,
    CNY: 9.23
  },
  JPY: {
    USD: 0.0092,
    EUR: 0.0077,
    GBP: 0.0069,
    CNY: 0.063
  },
  CNY: {
    USD: 0.14,
    EUR: 0.12,
    GBP: 0.11,
    JPY: 15.73
  }
};

// Add an event listener to our convert button
convertButton.addEventListener('click', () => {
  // Get the selected currencies and amount
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;
  const amount = amountInput.value;

  // Get the exchange rate
  const exchangeRate = exchangeRates[fromCurrency][toCurrency];

  // Calculate the converted amount
  const convertedAmount = amount * exchangeRate;

  // Display the result
  resultDiv.innerHTML = ` ${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
});