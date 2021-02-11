const getSleepHours = day => {
  // This is where you input that amount of hours you sleep each day
  switch(day) {
    case 'monday':
      return 8
      break;
    case 'tuesday':
      return 8
      break;
    case 'wednesday':
      return 8
      break;
    case 'thursday':
      return 8
      break;
    case 'friday':
      return 8
      break;
    case 'saturday':
      return 8
      break;
    case 'sunday':
      return 8
      break;
    
    default:
      return "Error!"
  }
};

const getActualSleepHours = (day) => 
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

  console.log(getSleepHours('monday'));
  console.log(getActualSleepHours());
  
// This is where you will input the amount of hours you need to sleep
const getIdealSleepHours = () => {
  let idealHours = 9;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours) {

  // this is calculate the difference in hours of sleep
  console.log("you got the perfect amount of sleep!");
    }
    else if(actualSleepHours > idealSleepHours) {
      console.log("you got " + (idealSleepHours - actualSleepHours) + "more hours of sleep than needed");
    }

    else if(actualSleepHours < idealSleepHours) {
      console.log("you should get some rest becasue you have slept " + (idealSleepHours - actualSleepHours) + " hours less than you should have this week");
    }
    else {
      console.log("erro! something went wrong, check you code");
    }
};
// log text into final results
calculateSleepDebt();



