import flvjs from '../lib/flv';


export default class FlvPlayer {
    constructor() {
        this.player = null;
    }
    
    load(url, videoElement) {
        console.log('isSupported: ' + flvjs.isSupported());
        let mediaDataSource = {
            type: 'flv',
            isLive: true,
            url: url,
        };
        console.log('MediaDataSource', mediaDataSource);
        this.load_mds(mediaDataSource, videoElement);
    }
    
    load_mds(mediaDataSource, videoElement) {
        let element = videoElement;
        if (this.player != null) {
            this.player.unload();
            this.player.detachMediaElement();
            this.player.destroy();
            this.player = null;
        }
        this.player = flvjs.createplayer(mediaDataSource, {
            enableWorker: false,
            lazyLoadMaxDuration: 3 * 60,
            seekType: 'range',
        });
        this.player.attachMediaElement(element);
        this.player.load();
    }
    
    start() {
        this.player.play();
    }
    
    pause() {
        this.player.pause();
    }
    
    destroy() {
        this.player.pause();
        this.player.unload();
        this.player.detachMediaElement();
        this.player.destroy();
        this.player = null;
    }
    
    seekto(seekPoint) {
        this.player.currentTime = parseFloat(seekPoint);
    }
}


