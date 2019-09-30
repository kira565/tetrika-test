function dropHandler(e) {
    e.stopPropagation();
    e.preventDefault();

    let files = e.dataTransfer.files;
    let file=files[0];
    let fileReader = new FileReader();


    fileReader.onload = (progressEvent) => {
        let stringData = fileReader.result;
        document.getElementById('log-header').innerHTML = "<br>" + 'File content';
        appendLog(stringData);
    };

    fileReader.onerror = function(progressEvent) {
        appendLog("onerror!");
        appendLog("Has Error!");
    };


    fileReader.readAsText(file, "UTF-8");
}

function dragoverHandler(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
}


function appendLog(msg) {
    document.getElementById('log-area').innerHTML = msg;
}
