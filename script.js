const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
const mySelect = document.getElementById('MySelect')
let selectedValue = '';
mySelect.addEventListener('change', function() {
 selectedValue = this.value;
console.log("Selected value is now:", selectedValue);
 });

if (choice === '3') {
  cho; // Example diameter in inches
} else if (choice === 'medium') {
  diameter = 20; // Example diameter in inches
} else if (choice === 'large') {
  diameter = 30; // Example diameter in inches
} else {
  return "Invalid choice. Please select small, medium, or large.";
}




/* 3 choices */
/* { minDegree: 0, maxDegree: 120, value: 2 },
{ minDegree: 121, maxDegree: 240, value: 1 },
{ minDegree: 241, maxDegree: 360, value: 6 }, */

/* 4 choices
  { minDegree: 0, maxDegree: 90, value: 2 },
  { minDegree: 91, maxDegree: 180, value: 1 },
  { minDegree: 181, maxDegree: 270, value: 6 },
  { minDegree: 271, maxDegree: 360, value: 5 },
 
 */

  /* 5 choices
  { minDegree: 0, maxDegree: 72, value: 2 },
  { minDegree: 73, maxDegree: 144, value: 1 },
  { minDegree: 145, maxDegree: 216, value: 6 },
  { minDegree: 217, maxDegree: 288, value: 5 },
  { minDegree: 289, maxDegree: 360, value: 4 },
   */
 /* 6 choices
  { minDegree: 0, maxDegree: 30, value: 2 },
  { minDegree: 31, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 150, value: 6 },
  { minDegree: 151, maxDegree: 210, value: 5 },
  { minDegree: 211, maxDegree: 270, value: 4 },
  { minDegree: 271, maxDegree: 330, value: 3 },
 */
   /* 7 choices
  { minDegree: 0, maxDegree: 51, value: 2 },
  { minDegree: 52, maxDegree: 102, value: 1 },
  { minDegree: 103, maxDegree: 153, value: 6 },
  { minDegree: 154, maxDegree: 204, value: 5 },
  { minDegree: 205, maxDegree: 255, value: 4 },
   { minDegree: 256, maxDegree: 306, value: 5 },
  { minDegree: 307, maxDegree: 360, value: 4 },
   */

     /* 8 choices
  { minDegree: 0, maxDegree: 45, value: 2 },
  { minDegree: 46, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 135, value: 6 },
  { minDegree: 136, maxDegree: 180, value: 5 },
  { minDegree: 181, maxDegree: 225, value: 4 },
   { minDegree: 226, maxDegree: 270, value: 5 },
  { minDegree: 271, maxDegree: 315, value: 4 },
   { minDegree: 316, maxDegree: 360, value: 4 },
   */

      /* 9 choices
  { minDegree: 0, maxDegree: 40, value: 2 },
  { minDegree: 41, maxDegree: 80, value: 1 },
  { minDegree: 81, maxDegree: 120, value: 6 },
  { minDegree: 120, maxDegree: 160, value: 5 },
  { minDegree: 161, maxDegree: 200, value: 4 },
   { minDegree: 201, maxDegree: 240, value: 5 },
  { minDegree: 241, maxDegree: 280, value: 4 },
   { minDegree: 281, maxDegree: 320, value: 4 },
    { minDegree: 321, maxDegree: 360, value: 4 },
   */

      /* 10 choices
  { minDegree: 0, maxDegree: 36, value: 2 },
  { minDegree: 37, maxDegree: 72, value: 1 },
  { minDegree: 73, maxDegree: 108, value: 6 },
  { minDegree: 109, maxDegree: 144, value: 5 },
  { minDegree: 145, maxDegree: 180, value: 4 },
   { minDegree: 181, maxDegree: 216, value: 5 },
  { minDegree: 217, maxDegree: 252, value: 4 },
   { minDegree: 253, maxDegree: 288, value: 4 },
    { minDegree: 289, maxDegree: 324, value: 4 },
     { minDegree: 325, maxDegree: 360, value: 4 },
   */
//Size of each piece
const data = [16, 16, 16, 16, 16, 16];
//background color for each piece  ***change each color
var pieColors = [
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
];
//Create chart
let myChart = new Chart(wheel, {
  //Plugin for displaying text on pie chart
  plugins: [ChartDataLabels],
  //Chart Type Pie
  type: "pie",
  data: {
    //Labels(values which are to be displayed on chart)
      labels: [1, 2, 3, 4, 5, 6],  
    //Settings for dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    //Responsive chart
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      //hide tooltip and legend
      tooltip: false,
      legend: {
        display: false,
      },
      //display labels inside pie chart
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
      },
    },
  },
});
//display value based on the randomAngle
const valueGenerator = (angleValue) => {
  for (let i of rotationValues) {
    //if the angleValue is between min and max then display it
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      finalValue.innerHTML = `<p>Value: ${i.value}</p>`;
      spinBtn.disabled = false;
      break;
    }
  }
};

//Spinner count
let count = 0;
//100 rotations for animation and last rotation for result
let resultValue = 101;
//Start spinning
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  //Empty final value
  finalValue.innerHTML = `<p>Good Luck!</p>`;
  //Generate random degrees to stop at
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  //Interval for rotation animation
  let rotationInterval = window.setInterval(() => {
    //Set rotation for piechart
    /*
    Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
    */
    myChart.options.rotation = myChart.options.rotation + resultValue;
    //Update chart with new value;
    myChart.update();
    //If rotation>360 reset it back to 0
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      valueGenerator(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});