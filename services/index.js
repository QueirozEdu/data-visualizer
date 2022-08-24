async function showSliderData() {
    // const data = await fetch('./services/data.json');
    // let dataInfo = await data.json();

    let storageAvailable = document.getElementById("storage__available-slider").value;
    let storageUsed = document.getElementById("storage__used-slider").value;

    if (storageUsed > storageAvailable) {
        document.getElementById("storage__used-slider").value = storageAvailable;
        document.getElementById("space__left-value").innerText = "0";
        document.getElementById("data__visualization-header--title").innerText = "You've used ".concat(usedStorage).concat(" GB of your storage") 

        document.getElementById("chart__bar").style.width = "99%";
    }
    else {


        
    // document.getElementById("bar__final-value").innerText = dataInfo["storage"].concat("GB");

    document.getElementById("bar__final-value").innerText = storageAvailable;
    
    // let fullStorage = dataInfo["storage"];
    // let usedStorage = dataInfo["used"];
    // let barWidth = (usedStorage / fullStorage) * 100;

    let fullStorage = storageAvailable;
    let usedStorage = storageUsed;
    let barWidth = (usedStorage / storageAvailable) * 100;

    let barPercentage = barWidth.toString();
    let finalBarWidth = barPercentage.concat("%");
    document.getElementById("chart__bar").style.width = finalBarWidth;


    document.getElementById("data__visualization-header--title").innerText = "You've used ".concat(usedStorage).concat(" GB of your storage") 
    document.getElementById("space__left-value").innerHTML = fullStorage - usedStorage;
    }

}



// showSliderData();