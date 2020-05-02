function bounceback(mRect , fRect){
    if (mRect.x - fRect.x < fRect.width/2 + mRect.width/2
      && fRect.x - mRect.x < fRect.width/2 + mRect.width/2) {
    mRect.velocityX = mRect.velocityX * (-1);
    fRect.velocityX = fRect.velocityX * (-1);
  }
  if (mRect.y - fRect.y < fRect.height/2 + mRect.height/2
    && fRect.y - mRect.y < fRect.height/2 + mRect.height/2){
    mRect.velocityY = mRect.velocityY * (-1);
    fRect.velocityY = fRect.velocityY * (-1);
  }
  }
  function touching(mRect , fRect){
    if (mRect.x - fRect.x < fRect.width/2 + mRect.width/2
      && fRect.x - mRect.x < fRect.width/2 + mRect.width/2
      && mRect.y - fRect.y < fRect.height/2 + mRect.height/2
      && fRect.y - mRect.y < fRect.height/2 + mRect.height/2) {
   return true
  }
  else {
  return false
  }
  }