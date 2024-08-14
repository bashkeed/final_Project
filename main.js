
let myArray = [{
    'team1':'Chelsea',
     'time': '16:00',
     'team2':'Liverpool' },
               {'team1':'Arsenal',  'time': '20:00','team2':'Manchester City'},
               {'team1':'Crystal Palace', 'time': '12:30','team2':'Wolves'},]

console.table(myArray)
     
              let built = data =>{
                let table = document.getElementById('myTable')
                for(let i=0; i< data.length; i++){
                    let row = `<tr>
                            <td> ${data[i].team1}</td>
                            <td> ${data[i].time}</td>
                            <td> ${data[i].team2}</td>

                              </tr>`

                              table.innerHTML +=  row
                              console.log(row);
                }
              }
              built(myArray)
              
