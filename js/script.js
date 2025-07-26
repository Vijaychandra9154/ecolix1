
function calculateQuote() {
    const familySize = parseInt(document.getElementById("familySize").value);
    const garden = document.getElementById("garden").checked;
    const rainwater = document.getElementById("rainwater").checked;
    const biogas = document.getElementById("biogas").checked;

    let baseCost = 10000 + familySize * 1000;
    if (garden) baseCost += 3000;
    if (rainwater) baseCost += 4000;
    if (biogas) baseCost += 5000;

    document.getElementById("quoteResult").textContent = 
        "Estimated Cost: ₹" + baseCost.toLocaleString("en-IN");
}
