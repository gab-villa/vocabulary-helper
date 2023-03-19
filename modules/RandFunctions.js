export function getRandomInt(max)
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

/*
export function getManyRandomIntFromArray(dataId, cantInt)
{
  let randIntArray = new Array(cantInt);
  let med, izq = 0, der = dataId.length-1;

  med = getRandomIntFromInterval(izq, der);
  --cantInt;
  izq = getRandomIntFromInterval(izq, med-1);
  der = getRandomIntFromInterval(med+1, der);
  //med = (izq + der) / 2;
  med = getRandomInt(izq-1);
  med = getRandomInt(izq+1);
  med = getRandomInt(der-1);
  med = getRandomInt(der+1);
  while(randIntArray >= 0)
  {
    izq = 
    ++cantInt;
  }
  return randIntArray;
}*/