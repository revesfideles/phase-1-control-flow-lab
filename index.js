function scuberGreetingForFeet(someValue){
  if (someValue <= 400) {
    return "This one is on me!";
  } else if(someValue <= 2000) {
    return "That will be twenty bucks.";
  } else if(someValue <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  } 
}

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  let Generous;

  switch (tip) {
    case 'generous':
      Generous = 'Thank you so much.';
      break;
    case 'not as generous':
      Generous = 'Thank you.';
      break;
    default:
      Generous = 'Bye.'
      break;
  }
  return Generous;
}