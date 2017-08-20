var panelBody = document.getElementById("panel-body");   
function  dataShow(){  
       startDate  =  "2016-12-5";
       var date = new Date();
       var year = date.getFullYear();
       var month = date.getMonth();
       var day = date.getDate();
       var seperator = "-";
       var currentDate = year + seperator + month +seperator+ day;
       var diffDate=DateDiff(startDate,currentDate);
       panelBody.innerText="我们在一起"+diffDate+"天啦~";
   }  

   //计算天数差的函数，通用  
   function  DateDiff(sDate1,  sDate2){    //sDate1和sDate2是2002-12-18格式  
       var  aDate,  oDate1,  oDate2,  iDays  
       aDate  =  sDate1.split("-")  
       oDate1  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0])    //转换为12-18-2002格式  
       aDate  =  sDate2.split("-")  
       oDate2  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0])  
       iDays  =  parseInt(Math.abs(oDate1  -  oDate2)  /  1000  /  60  /  60  /24)    //把相差的毫秒数转换为天数  
       return  iDays}