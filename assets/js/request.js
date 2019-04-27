export function getParam() {
    let paramList = new Object;
    let param = location.search.substring(1).split('&');
    let paramSplit;
    for (let i = 0; param[i]; i++) {
        paramSplit = param[i].split('=');
        paramList[paramSplit[0]] = paramSplit[1];
    }
    return paramList;
}

