function total() {
    var calculate = 0;
    for (var i = 0; i < arguments.length ; i++) {
    calculate += arguments[i];
    };
  return calculate;
  }
  alert(total(5, 55, 77, 88));
  
  function myDate() {
    var d = new Date();
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var result = weekdays[d.getDay()];
    alert(result);
  }