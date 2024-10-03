document.getElementById("convertBtn").addEventListener("click", function() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    let result;

    if (unit === "celsius") {
        result = (temperature * 9/5) + 32; // Convert Celsius to Fahrenheit
        document.getElementById("result").textContent = `${temperature}°C is ${result.toFixed(2)}°F`;
    } else {
        result = (temperature - 32) * 5/9; // Convert Fahrenheit to Celsius
        document.getElementById("result").textContent = `${temperature}°F is ${result.toFixed(2)}°C`;
    }
});
