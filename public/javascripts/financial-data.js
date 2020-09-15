


axios.get(`http://api.coindesk.com/v1/bpi/historical/close.json?start=${}&end=${}`)
.then(responseFromApi => {
    console.log(responseFromApi.data)
    printTheChart(responseFromApi.data)

})
.catch(error => console.log(error))


function printTheChart(data) {
    const BPI = data.bpi;
   
    const BPIDates = Object.keys(BPI);
    const BPIPrices = Object.values(BPI);
   
    const ctx = document.getElementById('my-canvas').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: BPIDates,
        datasets: [
          {
            label: 'BitCoin Value',
            backgroundColor: 'rgb(135,206,235)',
            borderColor: 'rgb(0,191,255)',
            data: BPIPrices
          }
        ]
      }
    }); // closes chart = new Chart()
  } // closes printTheChart()