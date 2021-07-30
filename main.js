window.onload = function() {
    //hello();
      // turn number of seconds into hh:mm
      function formatTime(s) {
        var h = Math.floor(s / 60 / 60);
        var m = Math.floor((s - (h * 60 * 60)) / 60);
        if (m < 10) m = '0' + m;
        
        return h + ':' + m;
       
      }
    
      // update battery status info
      function updateBatteryStatus(battery) {
       var cso = (battery.charging) ? 1 : 0;
     
        var batteryString = Math.round(battery.level * 100);
      hello(batteryString,cso);
        // if we can display "time to empty"
        // if (!battery.charging && (battery.dischargingTime !== Number.POSITIVE_INFINITY)) {
        //   batteryString += + formatTime(battery.dischargingTime) + ' until empty)';
        // }
    
        // if we can display "time to full"
    //     else if (battery.charging && (battery.chargingTime !== 0) && (battery.chargingTime !== Number.POSITIVE_INFINITY)) {
    //       batteryString += ' (' + formatTime(battery.chargingTime) + ' until full)';
    
    //     }
    
        var chargeSymbolOpacity = (battery.charging) ? 1 : 0;
    
      }
    
      // new getBattery() method (Chrome, Opera)
      if ('getBattery' in navigator) {
        navigator.getBattery().then(function(battery) {
       
      
          updateBatteryStatus(battery);
    
          battery.onchargingchange = function() {
            updateBatteryStatus(battery);
          };
    
          battery.onlevelchange = function() {
            updateBatteryStatus(battery);
          };
    
          battery.onchargingtimechange = function() {
            updateBatteryStatus(battery);
          };
    
          battery.ondischargingtimechange = function() {
            updateBatteryStatus(battery);
          };
    
        });
      }
    
      var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery || navigator.msBattery;
      if (battery) {
    
        updateBatteryStatus(battery);
    
        battery.onchargingchange = function() {
          updateBatteryStatus(battery);
        };
    
        battery.onlevelchange = function() {
          updateBatteryStatus(battery);
        };
    
        battery.onchargingtimechange = function() {
          updateBatteryStatus(battery);
        };
    
        battery.ondischargingtimechange = function() {
          updateBatteryStatus(battery);
        };
    
      }
    
    };
    