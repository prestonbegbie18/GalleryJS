//var chico = ["Bidwell Mansion","Chico State","Bidwell Park","Gateway Science Museum","National Yo-Yo Museum"];
var chico = [
  {description: "Bidwell Mansion", picture: "https://www.parks.ca.gov/pages/460/images/BidwellMansion%20002.jpg", from: "parks.ca.gov"},
  {description: "Chico State", picture: "http://today.csuchico.edu/wp-content/uploads/2015/08/Kendall-Hall-now.jpg", from: "today.csuchico.edu"},
  {description: "Bidwell Park", picture: "http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/BidwellPark_FifthandFlume_1280x642_1.jpg", from: "visitcalifornia.com"},
  {description: "Gateway Science Museum", picture: "http://www.capital-engineering.com/images/projects/markets/higher_ed/02highered.jpg", from: "www.capital-engineering.com"},
  {description: "National Yo-Yo Museum", picture: "http://www.downtownchico.com/webart/listings/278.jpg", from: "www.downtownchico.com"}
];
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
  document.getElementById("picture").src = current.picture;
  document.getElementById("caption").innerHTML = current.description;
  document.getElementById("source").innerHTML = "Image courtesy of: " + current.from;
  //console.log(current);
}

function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
