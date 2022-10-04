const date=new Date();
const renderCalender = function(){
    const monthDays = document.querySelector(".days");
    const lastDay = new Date(date.getUTCFullYear(),date.getMonth()+1,0).getDate();
    const prevLastDay=new Date(date.getUTCFullYear(),date.getMonth(),0).getDate();
    const  firstDayIndex = date.getDate();
    const lastDayIndex =new Date(date.getUTCFullYear(),date.getMonth()+1,0).getDay();
    const nextDay=7-lastDayIndex;
    const months=[
        "January",
        "febuary",
        "March",
        "april",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    document.querySelector(".date h1").innerHTML =months[date.getMonth()];
    document.querySelector(".date p").innerHTML=date.toDateString();

    let days=" ";
    for (let x=firstDayIndex; x>0; x--){
        days+="<div class='prev-date'>"+(prevLastDay-x+1)+"</div>";
    }
    for(let i=1;i<=lastDay;i++){
        if(i==new Date().getDate() && date.getMonth()==new Date().getMonth()){
            days+="<div class='today'>"+i+"</div>";
        }else{
            days+="<div>"+i+"</div>";
        }
        
        monthDays.innerHTML=days;

    }
    for (let j=1;j<=nextDay;j++){
        days+="<div class='next-date'>"+j+"</div>";
        monthDays.innerHTML=days;
    }
    
}
document.querySelector(".prev").addEventListener("click",function()
{
    date.setMonth(date.getMonth()-1);
    renderCalender();
})
document.querySelector(".next").addEventListener("click",function()
{
    date.setMonth(date.getMonth()+1);
    renderCalender();
})
renderCalender()


