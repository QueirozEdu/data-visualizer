async function readJson() {
    const data = await fetch('./services/data.json');
    let dataInfo = await data.json();
    
    
    document.getElementById("bar__final-value").innerText = dataInfo["storage"].concat("GB");
    
    let fullStorage = dataInfo["storage"];
    let usedStorage = dataInfo["used"];
    let barWidth = (usedStorage / fullStorage) * 100;

    let barPercentage = barWidth.toString();
    let finalBarWidth = barPercentage.concat("%");
    document.getElementById("chart__bar").style.width = finalBarWidth;


    document.getElementById("data__visualization-header--title").innerText = "You've used ".concat(usedStorage).concat(" GB of your storage")
    document.getElementById("space__left-value").innerHTML = fullStorage - usedStorage;

}




readJson();