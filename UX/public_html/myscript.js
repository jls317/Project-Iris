window.onload = datetime('sys_time');
window.onload = rtdata('sys_temp, sys_altitude, sys_gps');
window.onload = myMap();
function datetime(id) {
    date = new Date;
    year = date.getFullYear();
    month = date.getMonth();
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
    d = date.getDate();
    day = date.getDay();
    days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    h = date.getHours();
    if (h < 10)
    {
        h = "0" + h;
    }
    m = date.getMinutes();
    if (m < 10)
    {
        m = "0" + m;
    }
    s = date.getSeconds();
    if (s < 10)
    {
        s = "0" + s;
    }
    result = '' + days[day] + ' ' + months[month] + ' ' + d + ' ' + year + ' ' + h + ':' + m + ':' + s;
    document.getElementById(id).innerHTML = result;
    setTimeout('datetime("' + id + '");', '1000');
    return result;
}
function rtdata() {
    //collect real time data and display to header
    //include temperature, altitude, and gps coords.
    //print to 'sys_data' blocks



}

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(40.606527, -75.377582),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
      