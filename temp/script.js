document.getElementById('convertButton').addEventListener('click', convertTemperature);

function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const unit = document.getElementById("unitSelector").value;
    const resultElement = document.getElementById("result");
    let convertedTemperature;

    if (isNaN(temperatureInput)) {
        resultElement.innerText = "Please enter a valid number.";
        return;
    }

    const temperature = parseFloat(temperatureInput);

    if (unit === "celsius") {
        convertedTemperature = {
            fahrenheit: (temperature * 9 / 5) + 32,
            kelvin: temperature + 273.15
        };
    } else if (unit === "fahrenheit") {
        convertedTemperature = {
            celsius: (temperature - 32) * 5 / 9,
            kelvin: (temperature - 32) * 5 / 9 + 273.15
        };
    } else if (unit === "kelvin") {
        convertedTemperature = {
            celsius: temperature - 273.15,
            fahrenheit: (temperature - 273.15) * 9 / 5 + 32
        };
    }

    resultElement.innerText = `Converted temperature: ${temperature} ${unit} is\n`;

    for (const [targetUnit, value] of Object.entries(convertedTemperature)) {
        resultElement.innerText += `${value.toFixed(2)} ${targetUnit}, `;
    }
}