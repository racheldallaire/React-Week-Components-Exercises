/* eslint-disable */
function delay(t){
  t = t || 2000;
  return new Promise(function(res){
    setTimeout(res, t);
  });
} 
