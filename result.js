
function predict() {
            
    console.log("Submit Button Clicked");
    var cgpa = frm.cgpa.value;
    
    var iq = frm.iq.value;
    var ps = frm.ps.value;
    var result = document.getElementById("result");
    //var url="http://127.0.0.1:5000/predict"

     var url = "https://student-placement-predictions.herokuapp.com/predict";
    
    $.post(url, {
        'cgpa': cgpa,
        'iq': iq,
        'ps': ps,
    },
    function(data, status) {
        console.log(data['placement']);
        result.innerHTML ="Placement :" +data['placement'] ;
        console.log(status);
    }
    );
   
  
}
