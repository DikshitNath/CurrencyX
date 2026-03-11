const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const btn = document.querySelector("#convert-btn");
const msg = document.querySelector("#msg");
const liveRateDisplay = document.querySelector("#live-rate-display");
const fromCurr = document.querySelector("#from select");
const toCurr = document.querySelector("#to select");

const updateFlag = (ele) => {
  let currCode = ele.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  ele.parentElement.querySelector("img").src = newSrc;
};

async function fetchAndDisplay(amtVal = 1) {
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
  try {
    msg.innerText = "Fetching rate...";
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let finalAmount = (amtVal * rate).toFixed(4);
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    liveRateDisplay.innerText = `1 ${fromCurr.value} = ${(1 * rate).toFixed(4)} ${toCurr.value}`;
  } catch (err) {
    msg.innerText = "Could not fetch rate. Try again.";
  }
}

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  let amountInput = document.querySelector("#amount input");
  let amtVal = parseFloat(amountInput.value);
  if (!amtVal || amtVal < 1) {
    amtVal = 1;
    amountInput.value = "1";
  }
  fetchAndDisplay(amtVal);
});

// Populate dropdowns
for (let currencyCode in countryList) {
  let countryCode = countryList[currencyCode];
  let countryName = getCountryName(countryCode);

  let optionFrom = document.createElement("option");
  optionFrom.value = currencyCode;
  optionFrom.innerHTML = `${countryName} (${currencyCode})`;
  if (currencyCode === "USD") optionFrom.selected = true;
  fromCurr.appendChild(optionFrom);

  let optionTo = document.createElement("option");
  optionTo.value = currencyCode;
  optionTo.innerHTML = `${countryName} (${currencyCode})`;
  if (currencyCode === "INR") optionTo.selected = true;
  toCurr.appendChild(optionTo);
}

fromCurr.addEventListener("change", function () {
  updateFlag(this);
  fetchAndDisplay();
});

toCurr.addEventListener("change", function () {
  updateFlag(this);
  fetchAndDisplay();
});

function getCountryName(code) {
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  return regionNames.of(code) || code;
}

document.addEventListener("DOMContentLoaded", () => {
  updateFlag(fromCurr);
  updateFlag(toCurr);
  fetchAndDisplay();
});