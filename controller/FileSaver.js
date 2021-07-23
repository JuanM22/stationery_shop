const FileSaverController = {};

function saveFiles(req) {
    const file = req.files.file;
    __dirname = __dirname.replace('controller', '');
    return new Promise((resolve) => {
        if(file[0] === undefined) saveOneFile(file, resolve);
        else saveSeveralFiles(file, resolve);
    })
}

function saveOneFile(file, resolve) {
    let uploadPath = __dirname + 'resources/' + file.name;
    file.mv(uploadPath, function (err) {
        if (err) resolve('Error');
        else resolve('files saved successfully');
    });
}

function saveSeveralFiles(file, resolve) {
    var counter = 0;
    for (let i = 0; i < file.length; i++) {
        let uploadPath = __dirname + 'resources/' + file[i].name;
        file[i].mv(uploadPath, function (err) {
            if (err) resolve('Error');
            else counter++;
            console.log(counter);
            if (counter == file.length) resolve('files saved successfully');
        });
    }
}

function getFiles(fileName) {
    __dirname = __dirname.replace('controller', '');
    const file = `${__dirname}/resources/` + fileName;
    return file;
}

FileSaverController.saveFiles = saveFiles;
FileSaverController.getFiles = getFiles;

module.exports = FileSaverController