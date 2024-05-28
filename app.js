const primaryInput = document.querySelector("#primary-input");
const secondaryInput = document.querySelector("#secondary-input");
const primarySelect = document.querySelector("#primary-units");
const secondarySelect = document.querySelector("#secondary-units");

primaryInput.value = 0;
secondaryInput.value = 0;

function update(e) {
  const elementId = e.target.id;

  if (elementId === "secondary-input") {
    primaryInput.value = calculate(
      secondarySelect.value,
      primarySelect.value,
      secondaryInput.value
    );
  } else {
    secondaryInput.value = calculate(
      primarySelect.value,
      secondarySelect.value,
      primaryInput.value
    );
  }
}

function calculate(firstTempUnit, secondTempUnit, temp) {
  if (firstTempUnit === secondTempUnit) {
    return temp;
  }

  const combination = firstTempUnit + "-" + secondTempUnit;
  let result;

  switch (combination) {
    // Convert fahrenheit to celsius
    case "fahrenheit-celsius":
      // C = (F - 32) * 5/9
      result = Number(temp) - 32 * (5 / 9);
      break;
    // Convert celsius to fahrenheit
    case "celsius-fahrenheit":
      // F = (C * 9/5) + 32
      result = Number(temp) * (9 / 5) + 32;
      break;
    // Convert kelvin to fahrenheit (corrected formula)
    case "kelvin-fahrenheit":
      // F = (K - 273.15) * 9/5 + 32
      result = Number(temp) - 273.15 * (9 / 5) + 32;
      break;
    // Convert kelvin to celsius
    case "kelvin-celsius":
      // C = K - 273.15
      result = Number(temp) - 273.15;
      break;
    // Convert fahrenheit to kelvin
    case "fahrenheit-kelvin":
      // K = (F - 32) * 5/9 + 273.15
      result = Number(temp) - 32 * (5 / 9) + 273.15;
      break;
    // Convert celsius to kelvin
    case "celsius-kelvin":
      // K = C + 273.15
      result = Number(temp) + 273.15;
      break;
  }
  return result.toFixed(2);
}

[primaryInput, secondaryInput, primarySelect, secondarySelect].forEach(
  (element) => {
    element.addEventListener("change", update);
  }
);
