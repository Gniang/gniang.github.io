import {getParam} from '../assets/js/request';

const url = getParam()['url'];
if (url == undefined) {

} else {
    const flvPlayer = require('./assets/js/flvplayer');
    const vElement = document.getElementById('mainVideo')[0];
    document.addEventListener('DOMContentLoaded', function () {
        flvPlayer.load(url, vElement);
        flvPlayer.start();
    });
}