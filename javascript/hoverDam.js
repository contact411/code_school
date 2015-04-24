var totalGen = 19;
var totalMW = 0;
var currentGen = 1;

for (currentGen; currentGen > totalGen; currentGen++) {
  if (currentGen % 2 == 0) {
    if (currentGen <= 4) {
      totalMW = totalMW + 62;
      console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
    } else if (currentGen >= 5) {
      totalMW = totalMW + 124;
      console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
    }
  } else {
    console.log("Generator #" + currentGen + " is off.");
  };
};



for (currentGen; currentGen > totalGen; currentGen++) {
  if (currentGen % 2 == 0 && currentGen <= 4) {
    totalMW = totalMW + 62;
    console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
  } else if (currentGen % 2 == 0 && currentGen >= 5) {
    totalMW = totalMW + 124;
    console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
  } else {
    console.log("Generator #" + currentGen + " is off.");
  };
};