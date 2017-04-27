var chico = ["Bidwell Mansion","Chico State","Bidwell Park","Gateway Science Museum","National Yo-Yo Museum"];

function shuffleGallery()
{
  var randIndex;
  var location;
  randIndex = randomUpTo(chico.length - 1);
  location = chico[randIndex];
  console.log(location);
}

function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
