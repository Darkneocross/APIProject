<?php           
    // Now set some options (most are optional)
    $lat = $_GET['Latitude'];
    $lon = $_GET['Longitude'];
    while($lat == 0 && $lon == 0) {
      echo($lat);
      echo($lon);
    }
    $url = client_secret=AD4ifJP5af6YsjHGXo5rPbUpffhJBbwUu8R3IrDK" \
    -F "client_id=3oHMElMC6bYFSHAvFjfI20czlNj5pDf2" \
    -F "grant_type=client_credentials" \
    -F "scope=delivery" \
    https://login.uber.com/oauth/v2/token";
    
    $curl = curl_init();
      curl_setopt($curl, CURLOPT_URL, $url);
      curl_setopt($curl, CURLOPT_RETURNTRANSFER, true); // Don't print the result
      curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 10);
      curl_setopt($curl, CURLOPT_TIMEOUT, 10);
      curl_setopt($curl, CURLOPT_FAILONERROR, true);
      curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0); // Don't verify SSL connection
      curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0); //         ""           ""
      curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-Type: application/json")); // Send as JSON
      
      
      $return = curl_exec($curl);

      echo ($return);
      // echo "<pre>"; print_r($return); echo "</pre>";exit; 
?>