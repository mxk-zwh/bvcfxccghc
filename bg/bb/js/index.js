// js获取路径下的所有文件名字
function getFileNames(path) {
    var files = [];
    var file = new File([],fileName=path,{type: 'image/jpeg'});
    if (file.isDirectory()) {
        var files = file.listFiles();
        for (var i = 0; i < files.length; i++) {
            files[i] = files[i].getName();
        }
    }
    return files;
}


    

