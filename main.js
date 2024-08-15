
//fixtures
let myArray = [
  { team1: "Chelsea", time: "16:00", team2: "Liverpool", date: "16/08/2024" },
  {
    team1: "Arsenal",
    time: "20:00",
    team2: "Manchester City",
    date: "16/08/2024",
  },
  {
    team1: "Crystal Palace",
    time: "12:30",
    team2: "Wolves",
    date: "16/08/2024",
  },
];

const built = (data) => {



  let table = document.getElementById("myTable");
  for (let i = 0; i < data.length; i++){
    let row = `<tr>
                            <td> ${data[i].team1}</td>
                            <td> ${data[i].time}</td>
                            <td> ${data[i].team2}</td>
                            <td> ${data[i].date}</td>

              </tr>`;

    table.innerHTML += row;
    console.log(row);
  }
};




//table

let teams = [
  { pos: "1", team: "Arsenal", pld: "0", gd: "0", pts: "0" },
  { pos: "2", team: "Man Utd", pld: "0", gd: "0", pts: "0" },
  { pos: "3", team: "Chelsea", pld: "0", gd: "0", pts: "0" },
  { pos: "4", team: "Liverpool", pld:"0",gd: "0", pts: "0" },
];

let info = (dat) => {

  

  let tab = document.getElementById("standing");
  for (let i = 0; i < dat.length; i++) {
    let row = `<tr>
                            <td> ${dat[i].pos}</td>
                            <td> ${dat[i].team}</td>
                            <td> ${dat[i].pld}</td>
                            <td> ${dat[i].gd}</td>
                            <td> ${dat[i].pts}</td>

              </tr>`;

    tab.innerHTML += row;
    console.log(row);
   
  }
};

