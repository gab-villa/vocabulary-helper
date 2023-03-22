
export function getRandomInt(max) //warning: here the min is always 0
{
  return Math.round(Math.random() * max);
}
export function getRandomIntFromInterval(min, max) {
  return Math.round(Math.random() * (max - min + 1) + min);
}


// ref (best answer): 
//https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100
export function getArrOfRandomInt(cantInt, max)
{
  let randIntArray = [], randNum;
  while(randIntArray.length < cantInt)
  {
    randNum = getRandomInt(max) + 1;
    //si no se encontro en el array
    if(randIntArray.indexOf(randNum) === -1) 
    {
      randIntArray.push(randNum);
    }
  }
  return randIntArray;
}