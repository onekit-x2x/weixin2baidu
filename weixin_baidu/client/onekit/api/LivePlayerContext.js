export default class LivePlayerContext{
  constructor(swanLivePlayerContext) {
    this.swanLivePlayerContext = swanLivePlayerContext;
  }
  play(){
    return  this.swanLivePlayerContext.play();
  }
  pause(){
    return  this.swanLivePlayerContext.pause();
  }
  stop(){
    return  this.swanLivePlayerContext.stop();
  }

  mute(){
    return this.swanLivePlayerContext.mute();
  }
  resume(data){
    return this.swanLivePlayerContext.resume(data);
  }
  requestFullScreen(direction){
    return this.swanLivePlayerContext.requestFullScreen(direction);
  }
  exitFullScreen(){
      return this.swanLivePlayerContext.exitFullScreen();
    }
 


}