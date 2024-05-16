const data = {
    heartdisease: [100, 100,],
    cancer: [80, 80,],
    covid19: [60, 40,],
    stroke: [20, 20,],
    accidents: [40, 60,],
  };


  const setProgressBars = (foodGroup) => {
    const foodData = data[foodGroup];
    const barDivs = [
      document.getElementById("bar-2017"),
      document.getElementById("bar-2018"),
      
    ];

    barDivs.forEach((bar, i) => {
      bar.style.height = foodData[i] + "%";
      bar.innerHTML = foodData[i] + " ";
    });
  };