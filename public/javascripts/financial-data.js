const input = document.querySelector("input")

const startDate = document.getElementById("start-date")
const endDate = document.getElementById("end-date")

let startDateValue
let endDateValue
let url = "http://api.coindesk.com/v1/bpi/historical/close.json"

execUrl(url)

endDate.addEventListener('change', (event) => {
    endDateValue = endDate.value
    if (endDateValue && startDateValue) {
        url = `http://api.coindesk.com/v1/bpi/historical/close.json?start=${startDateValue}&end=${endDateValue}`
    }
    execUrl(url)
});

startDate.addEventListener('change', (event) => {
    startDateValue = startDate.value
    if (endDateValue && startDateValue){
        url = `http://api.coindesk.com/v1/bpi/historical/close.json?start=${startDateValue}&end=${endDateValue}`
    } 
    execUrl(url)
});

function execUrl(url) {
    console.log("=>", url)
    axios.get(url)
    .then(responseFromApi => {
        //console.log(responseFromApi.data)
        printTheChart(responseFromApi.data)
    })
    .catch(error => console.log(error))
}

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