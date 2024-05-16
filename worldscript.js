const data = {
    heartdisease: [100, 100,],
    cancer: [80, 20,],
    copd: [60, 60,],
    stroke: [40, 80,],
    accidents: [20, 40,],
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