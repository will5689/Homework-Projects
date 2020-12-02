


const hmmm = document.getElementById("id");
var hours = ["09", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var dayHours = {
    id: "ID",
    hour: "10000",
    time: "TIME"
};
console.log(dayHours.hour);

    const hourList = [
        {
            id: "0",
            hour: "09",
            time: "am",
            
        },
        {
            id: "1",
            hour: "10",
            time: "am",
            

        },
        {
            id: "2",
            hour: "11",
            time: "am",
            
        },
        {
            Id: "3",
            hour: "12",
            time: "am",
            
        },
        {
            id: "4",
            hour: "1",
            time: "pm",
            
        },
        {
            id: "5",
            hour: "2",
            time: "pm",
            
        },
        {
            id: "6",
            hour: "3",
            time: "pm",
            
        },
        {
            id: "7",
            hour: "4",
            time: "pm",
           
        },
        {
            id: "8",
            hour: "5",
            time: "pm",
            
        },
        {
            id: "9",
            hour: "6",
            time: "pm",
            
        },
        {
            id: "10",
            hour: "7",
            time: "pm",
            
        },
        {
            id: "11",
            hour: "8",
            time: "pm",
            
        },
        {
            id: "12",
            hour: "9",
            time: "pm",
            
        },
    ];
 

for (var i = 0; i < hourList.length; i++) {
  console.log("The Time is  " + hourList[i]);
}

       
for (var i = 0; i < dayHours; i++) {
    diplay.content;
  
}

console.log(hourList)
window.localStorage.setItem('what', JSON.stringify(dayHours));
       

const test = localStorage.getItem('id');

console.log (test)