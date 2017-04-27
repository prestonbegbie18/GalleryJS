var chico = ["Bidwell Mansion","Chico State","Bidwell Park","Gateway Science Museum","National Yo-Yo Museum"];
var current;

function shuffleGallery()
{
  var randIndex;
  randIndex = randomUpTo(chico.length - 1);
  while(current == chico[randIndex])
  {
    randIndex = randomUpTo(chico.length - 1);
  }
  current = chico[randIndex];
  console.log(current);
}

function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
