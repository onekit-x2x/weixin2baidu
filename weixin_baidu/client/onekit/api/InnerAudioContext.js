export default class InnerAudioContext{
  constructor(swanInnerAudioContext) {
    this.swanInnerAudioContext = swanInnerAudioContext;
  }
  play(){
    return  this.swanInnerAudioContext.play();
  }
  pause(){
    return  this.swanInnerAudioContext.pause();
  }
  stop(){
    return  this.swanInnerAudioContext.stop();
  }

  seek(position){
    return  this.swanInnerAudioContext.seek(position);
  }
onCanplay(callback){
  return  this.swanInnerAudioContext.onCanplay(callback);
}
offCanplay(callback){
  return  this.swanInnerAudioContext.offCanplay(callback);
}

onPlay(callback){
  return  this.swanInnerAudioContext.onPlay(callback);
}
offPlay(callback){
  return  this.swanInnerAudioContext.offPlay(callback);
}

onPause(callback){
  return  this.swanInnerAudioContext.onPause(callback);
}
offPause(callback){
  return  this.swanInnerAudioContext.offPause(callback);
}

onStop(callback){
  return  this.swanInnerAudioContext.onStop(callback);
}
offStop(callback){
  return  this.swanInnerAudioContext.offStop(callback);
}

onEnded(callback){
  return  this.swanInnerAudioContext.onEnded(callback);
}
offEnded(callback){
  return  this.swanInnerAudioContext.offEnded(callback);
}

onTimeUpdate(callback){
  return this.swanInnerAudioContext.onTimeUpdate(callback);
}
offTimeUpdate(callback){
  return this.swanInnerAudioContext.offTimeUpdate(callback);
}

onError(callback){
  return this.swanInnerAudioContext.onError(callback);
}
offError(callback){
  return this.swanInnerAudioContext.offError(callback);
}

onWaiting(callback){
  return this.swanInnerAudioContext.onWaiting(callback);
}
offWaiting(callback){
  return this.swanInnerAudioContext.offWaiting(callback);
}

onSeeking(callback){
  return this.swanInnerAudioContext.onSeeking(callback);
}
offSeeking(callback){
  return this.swanInnerAudioContext.offSeeking(callback);
}

onSeeked(callback){
  return this.swanInnerAudioContext.onSeeked(callback);
}
offSeeked(callback){
  return this.swanInnerAudioContext.offSeeked(callback);
}
 
 



}