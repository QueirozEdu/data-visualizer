async function readJson() {
    const data = await fetch('./services/data.json');
     let dataInfo = await data.json();
     console.log(dataInfo["storage"]);
}

// setInterval(readJson(), 1000);