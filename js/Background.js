<!DOCTYPE html>
<html lang="en">

<head>
  <link rel="shortcut icon" type="image/png" href="assets/logos/favicon.png"/>
  <link rel="stylesheet" type="text/css" href="css/text.css">
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link rel="stylesheet" type="text/css" href="css/page.css">
  <link rel="stylesheet" type="text/css" href="css/alert.css">
  <link rel="stylesheet" type="text/css" href="css/background.css">
  <link rel="stylesheet" type="text/css" href="css/crawl.css">
  <link rel="stylesheet" type="text/css" href="css/currentconditions.css">
  <link rel="stylesheet" type="text/css" href="css/forecast.css">
  <link rel="stylesheet" type="text/css" href="css/greeting.css">
  <link rel="stylesheet" type="text/css" href="css/infobar.css">
  <link rel="stylesheet" type="text/css" href="css/outlook.css">
  <link rel="stylesheet" type="text/css" href="css/radar.css">
  <link rel="stylesheet" type="text/css" href="css/settings.css">
  <link rel="stylesheet" type="text/css" href="css/timeline.css">
  <link rel="stylesheet" type="text/css" href="css/amazing.css">
  <link rel="stylesheet" type="text/css" href="css/updated.css">
  <script src="js/Config.js"></script>
  <script src="js/MainScript.js"></script>
  <script src="js/WeatherFetching.js"></script>
  <script src="js/InformationSetting.js"></script>
  <script src="js/Background.js"></script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>IntelliSTAR Emulator</title>
</head>

<body>
  <div id="render-frame">
    <!--Nature Background image-->
    <div id="background-image" class="below-screen"></div>

    <!-- Top Information Bar -->
    <div id="infobar-container">
      <img id="infobar-twc-logo" src="assets/logos/twc.svg" onclick="twcLogoClick();" />
      <img id="infobar-local-logo" src="assets/logos/local.svg" />
      <div id="infobar-location-container" class="infobar-item-container">
        <div id="infobar-location-text" class="regular-text infobar-text"></div>
      </div>
      <div id="infobar-time-container" class="infobar-item-container">
        <div id="infobar-time-text" class="regular-text infobar-text"></div>
      </div>
    </div>

      <!-- Transparent Frame -->
    <div id="content-container"></div>

    <!--Main Container-->
    <div id="content-frame">
      <!-- Greeting Page -->
      <div id="greeting-page">
        <div id="local-logo-container">
          <img src="assets/logos/local-white-box.svg" />
        </div>

        <div id="hello-text-container">
          <div id="hello-text" class="strong-text">HELLO</div>
        </div>

        <div id="hello-location-container">
          <div id="hello-location-text" class="regular-text"></div>
        </div>

        <div id="greeting-text-container">
          <div id="greeting-text" class="regular-text"></div>
        </div>
      </div>

      <!-- Single Alert Page -->
      <div id="single-alert-page" class="page-container alert-page-container">
        <div>
          <div class="page-title-bar alert-title-bar regular-text">ALERT</div>
        </div>
        <!-- Have alert text take up entire window until alert graphics are obtained -->
        <div class="page-content-container forecast forecast-right" style="width: 100%;">
          <div id="single-alert0" class="narrative-text regular-text"></div>
        </div>
      </div>

      <!-- Multiple Alerts Page -->
      <div id="multiple-alerts-page" class="page-container alert-page-container">
        <div>
          <div class="page-title-bar alert-title-bar regular-text">ALERTS</div>
        </div>
        <div class="page-content-container shaded-page-content">
          <div class="alert-container">
            <div id="alert0" class="multiple-alert-text regular-text"></div>
          </div>
          <div class="alert-container">
            <div id="alert1" class="multiple-alert-text regular-text"></div>
          </div>
          <div class="alert-container">
            <div id="alert2" class="multiple-alert-text regular-text"></div>
          </div>
        </div>
      </div>

      <!-- Current Page -->
      <div id="current-page" class="page-container">
        <div>
          <div class="page-title-bar regular-text">Now</div>
        </div>
        <div class="page-content-container shaded-page-content">
          <div style="width: 300px; float: left;">
            <svg id="cc-dial" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.13 77.13">
              <defs>
                <style>
                  .cls-1 {
                    opacity: 0.0;
                  }
                  .cls-3 {
                    opacity: 0.25;
                  }
                </style>
              </defs>
              <title>Asset 7</title>

              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_6" data-name="Layer 6">
                  <clipPath id="cut-off-bottom">
                    <circle class="cls-1" cx="38.56" cy="38.56" r="38.56"/>
                  </clipPath>
                  <circle class="cls-3" cx="38.56" cy="38.56" r="38.56"/>
                  <image id="ccicon" x="35%" y="18%" style="width:24px;height:24px;" href="assets/icons/conditions/na.svg" clip-path="url(#cut-off-bottom)"/>
                  <text id="cc-temperature-text" class="regular-text" x="50%" y="75%" text-anchor="middle" style="font-size: 24px !important;" fill="#ffffff">NA</text>
                  <path id="cc-dial-color" class="cls-2" d="M18,59.45a29.34,29.34,0,1,1,41.26,0h0l5.62,4.75a36.68,36.68,0,1,0-52.32.24Z"/>
                </g>
              </g>
            </svg>
            <!--<img id="ccicon"/>-->
            <!--<div class="regular-text"><span id="cc-temperature-text">0</span>°</div>-->
          </div>
          <!-- Condition Line 1 -->
          <div id="cc-container">
            <div class="cc-line-container">
              <div class="cc-vertical-group">
                <div id="cc-condition" class="regular-text cc-text">Condition</div>
                <div class="cc-horizontal-group">
                  <div class="regular-text cc-text cc-left">VISIBILITY</div>
                  <div class="regular-text cc-text"><span id="cc-visibility">0</span> Miles</div>
                </div>
              </div>
            </div>
            <!-- Condition Line 2 -->
            <div class="cc-line-container">
              <div class="cc-vertical-group cc-line2">
                <div class="cc-horizontal-group">
                  <div class="regular-text cc-text cc-left">WIND</div>
                  <div id="cc-wind" class="regular-text cc-text">N 0mph</div>
                </div>
                <div class="cc-horizontal-group">
                  <div class="regular-text cc-text cc-left">HUMIDITY</div>
                  <div class="regular-text cc-text"><span id="cc-humidity">0</span>%</div>
                </div>
              </div>
            </div>
            <!-- Condition Line 3 -->
            <div class="cc-line-container">
              <div class="cc-vertical-group cc-line3">
                <div class="cc-horizontal-group">
                  <div class="regular-text cc-text cc-left">GUSTS</div>
                  <div id="cc-gusts" class="regular-text cc-text">NONE</div>
                </div>
                <div class="cc-horizontal-group">
                  <div class="regular-text cc-text cc-left">DEW POINT</div>
                  <div class="regular-text cc-text"><span id="cc-dewpoint">0</span>°</div>
                </div>
              </div>
            </div>
            <!-- Condition Line 4 -->
            <div class="cc-line-container">
              <div class="cc-vertical-group cc-line4">
                <div class="cc-horizontal-group">
                  <div class="regular-text cc-text cc-left">FEELS LIKE</div>
                  <div class="regular-text cc-text"><span id="cc-feelslike">0</span>°</div>
                </div>
                <div class="cc-horizontal-group">
                  <div class="regular-text cc-text cc-left">PRESSURE</div>
                  <div class="regular-text cc-text"><span id="cc-pressure1">29</span>.<span id="cc-pressure2">92</span><span id="cc-pressuretrend">▲</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Radar Page -->
      <div id="radar-page" class="page-container regular-page-container">
        <div class="page-title-bar regular-text">
          <div style="display: inline-block">3 Hour Radar</div>
          <div class="key">
            <div class="key-item key-item-snow">
              <div class="key-color-group">
                <div class="key-color" style="background-color: #91fdfd;"></div>
                <div class="key-color" style="background-color: #59aaab;"></div>
                <div class="key-color" style="background-color: #3f7c7d;"></div>
                <div class="key-color" style="background-color: #14303b;"></div>
              </div>
              <div class="key-label">Snow</div>
            </div>
          </div>
          <div class="key">
            <div class="key-item key-item-mix">
              <div class="key-color-group">
                <div class="key-color" style="background-color: #fe94ce;"></div>
                <div class="key-color" style="background-color: #cf5597;"></div>
                <div class="key-color" style="background-color: #a01765;"></div>
              </div>
              <div class="key-label">Mix/Ice</div>
            </div>
          </div>
          <div class="key">
            <div class="key-item key-item-rain">
              <div class="key-color-group">
                <div class="key-color" style="background-color: #69ff63;"></div>
                <div class="key-color" style="background-color: #19791d;"></div>
                <div class="key-color" style="background-color: #f9fe02;"></div>
                <div class="key-color" style="background-color: #ea6905;"></div>
                <div class="key-color" style="background-color: #9c0506;"></div>
              </div>
              <div class="key-label">Rain</div>
            </div>
          </div>
        </div>
        <div class="page-content-container">
          <div class="broken-radar-text">
            <div style="color: yellow;" class="strong-text">Temporarily Unavailable</div>
          </div>
          <div id="radar-container" style="position: absolute;">
          </div>
        </div>
      </div>

      <!-- Zoomed Radar Page -->
      <div id="zoomed-radar-page" class="page-container regular-page-container">
        <div class="page-title-bar regular-text">
          <div style="display: inline-block">3 Hour Radar</div>
          <div class="key">
            <div class="key-item key-item-snow">
              <div class="key-color-group">
                <div class="key-color" style="background-color: #91fdfd;"></div>
                <div class="key-color" style="background-color: #59aaab;"></div>
                <div class="key-color" style="background-color: #3f7c7d;"></div>
                <div class="key-color" style="background-color: #14303b;"></div>
              </div>
              <div class="key-label">Snow</div>
            </div>
          </div>
          <div class="key">
            <div class="key-item key-item-mix">
              <div class="key-color-group">
                <div class="key-color" style="background-color: #fe94ce;"></div>
                <div class="key-color" style="background-color: #cf5597;"></div>
                <div class="key-color" style="background-color: #a01765;"></div>
              </div>
              <div class="key-label">Mix/Ice</div>
            </div>
          </div>
          <div class="key">
            <div class="key-item key-item-rain">
              <div class="key-color-group">
                <div class="key-color" style="background-color: #69ff63;"></div>
                <div class="key-color" style="background-color: #19791d;"></div>
                <div class="key-color" style="background-color: #f9fe02;"></div>
                <div class="key-color" style="background-color: #ea6905;"></div>
                <div class="key-color" style="background-color: #9c0506;"></div>
              </div>
              <div class="key-label">Rain</div>
            </div>
          </div>
        </div>
        <div class="page-content-container">
          <div class="broken-radar-text">
            <div style="color: yellow;" class="strong-text">Temporarily Unavailable</div>
          </div>
          <div id="zoomed-radar-container" style="position: absolute;"></div>
        </div>
      </div>

      <!-- Today Page -->
      <div id="today-page" class="page-container regular-page-container">
        <div>
          <div class="page-title-bar regular-text">Forecast</div>
        </div>
        <div class="page-content-container">
          <div class="shaded-page-content narrative narrative-left">
            <div class="strong-text narrative-date">Today</div>
            <div id="today-forecast-icon" class="narrative-icon">&nbsp;</div>
            <div id="today-forecast-temp" class="regular-text narrative-temp">--</div>
            <div id="today-forecast-precip" class="regular-text narrative-precip">0% Chance of Precip</div>
          </div>
          <div class="shaded-page-content narrative narrative-right">
            <div id="today-narrative-text" class="narrative-text regular-text "></div>
          </div>
        </div>
      </div>

      <!-- Tonight Page -->
      <div id="tonight-page" class="page-container regular-page-container">
        <div>
          <div class="page-title-bar regular-text">Forecast</div>
        </div>
        <div class="page-content-container">
          <div class="shaded-page-content narrative narrative-left">
            <div class="strong-text narrative-date">Tonight</div>
            <div id="tonight-forecast-icon" class="narrative-icon">&nbsp;</div>
            <div id="tonight-forecast-temp" class="regular-text narrative-temp">--</div>
            <div id="tonight-forecast-precip" class="regular-text narrative-precip">0% Chance of Precip</div>
          </div>
          <div class="shaded-page-content narrative narrative-right">
            <div id="tonight-narrative-text" class="narrative-text regular-text "></div>
          </div>
        </div>
      </div>

      <!-- Tomorrow Page -->
      <div id="tomorrow-page" class="page-container regular-page-container">
        <div>
          <div class="page-title-bar regular-text">Forecast</div>
        </div>
        <div class="page-content-container">
          <div class="shaded-page-content narrative narrative-left">
            <div class="strong-text narrative-date">Tomorrow</div>
            <div id="tomorrow-forecast-icon" class="narrative-icon">&nbsp;</div>
            <div id="tomorrow-forecast-temp" class="regular-text narrative-temp">--</div>
            <div id="tomorrow-forecast-precip" class="regular-text narrative-precip">0% Chance of Precip</div>
          </div>
          <div class="shaded-page-content narrative narrative-right">
            <div id="tomorrow-narrative-text" class="narrative-text regular-text "></div>
          </div>
        </div>
      </div>

      <!-- Tomorrow Night Page -->
      <div id="tomorrow-night-page" class="page-container regular-page-container">
        <div>
          <div class="page-title-bar regular-text">Forecast</div>
        </div>
        <div class="page-content-container">
          <div class="shaded-page-content narrative narrative-left">
            <div class="strong-text narrative-date tomorrow-night-text">Tomorrow Night</div>
            <div id="tomorrow-night-forecast-icon" class="narrative-icon">&nbsp;</div>
            <div id="tomorrow-night-forecast-temp" class="regular-text narrative-temp">--</div>
            <div id="tomorrow-night-forecast-precip" class="regular-text narrative-precip">0% Chance of Precip</div>
          </div>
          <div class="shaded-page-content narrative narrative-right">
            <div id="tomorrow-night-narrative-text" class="narrative-text regular-text "></div>
          </div>
        </div>
      </div>

      <!-- 7 Day Outlook Page -->
      <div id="7day-page" class="page-container regular-page-container">
        <div>
          <div id="outlook-titlebar" class="page-title-bar regular-text">7 Day Forecast</div>
        </div>
        <div class="page-content-container">
          <div id="forecast-left-container" class="forecast-container forecast">
            <div id="day0-container" class="outlook-day day-spacing">
              <div id="day0-text" class="strong-text day-text">&nbsp;</div>
              <div id="day0-icon" class="day-icon">&nbsp;</div>
              <div id="day0-high" class="regular-text day-temp-high">&nbsp;</div>
              <div id="day0-low" class="regular-text day-temp-low">&nbsp;</div>
              <div id="day0-condition" class="regular-text day-condition">&nbsp;</div>
            </div>
            <div id="day1-container" class="outlook-day" style="float: right;">
              <div id="day1-text" class="strong-text day-text">&nbsp;</div>
              <div id="day1-icon" class="day-icon">&nbsp;</div>
              <div id="day1-high" class="regular-text day-temp-high">&nbsp;</div>
              <div id="day1-low" class="regular-text day-temp-low">&nbsp;</div>
              <div id="day1-condition" class="regular-text day-condition">&nbsp;</div>
            </div>
          </div>
          <div id="forecast-right-container" class="forecast-container forecast-right">
            <div id="day2-container" class="outlook-day day-spacing">
              <div id="day2-text" class="strong-text day-text">&nbsp;</div>
              <div id="day2-icon" class="day-icon">&nbsp;</div>
              <div id="day2-high" class="regular-text day-temp-high">&nbsp;</div>
              <div id="day2-low" class="regular-text day-temp-low">&nbsp;</div>
              <div id="day2-condition" class="regular-text day-condition">&nbsp;</div>
            </div>
            <div id="day3-container" class="outlook-day day-spacing">
              <div id="day3-text" class="strong-text day-text">&nbsp;</div>
              <div id="day3-icon" class="day-icon">&nbsp;</div>
              <div id="day3-high" class="regular-text day-temp-high">&nbsp;</div>
              <div id="day3-low" class="regular-text day-temp-low">&nbsp;</div>
              <div id="day3-condition" class="regular-text day-condition">&nbsp;</div>
            </div>
            <div id="day4-container" class="outlook-day day-spacing">
              <div id="day4-text" class="strong-text day-text">&nbsp;</div>
              <div id="day4-icon" class="day-icon">&nbsp;</div>
              <div id="day4-high" class="regular-text day-temp-high">&nbsp;</div>
              <div id="day4-low" class="regular-text day-temp-low">&nbsp;</div>
              <div id="day4-condition" class="regular-text day-condition">&nbsp;</div>
            </div>
            <div id="day5-container" class="outlook-day day-spacing">
              <div id="day5-text" class="strong-text day-text">&nbsp;</div>
              <div id="day5-icon" class="day-icon">&nbsp;</div>
              <div id="day5-high" class="regular-text day-temp-high">&nbsp;</div>
              <div id="day5-low" class="regular-text day-temp-low">&nbsp;</div>
              <div id="day5-condition" class="regular-text day-condition">&nbsp;</div>
            </div>
            <div id="day6-container" class="outlook-day" style="float: right;">
              <div id="day6-text" class="strong-text day-text">&nbsp;</div>
              <div id="day6-icon" class="day-icon">&nbsp;</div>
              <div id="day6-high" class="regular-text day-temp-high">&nbsp;</div>
              <div id="day6-low" class="regular-text day-temp-low">&nbsp;</div>
              <div id="day6-condition" class="regular-text day-condition">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Its Amazing Out There -->
    <div id="amazing-container">
      <div class="regular-text" id="amazing-text">#ItsAmazingOutThere</div>
      <img src="assets/logos/twc_color.svg" id="amazing-logo">
    </div>

    <!-- Stay updated -->
    <div id="updated-container">
      <img src="assets/logos/twc_color.svg" id="updated-logo">
      <div class="regular-text" id="updated-text">For more information, stay on</div>
    </div>

    <!-- Text Crawl -->
    <div id="crawler-container">
      <div id="crawl-text" class="regular-text"></div>
    </div>

    <!-- Timeline Container -->
    <div id="timeline-container">
      <!-- Current Logo -->
      <div id="timeline-logo-container">
        <div id="logo-stack"></div>
      </div>

      <!-- Timeline -->
      <div id="timeline">
        <div id="timeline-event-container"></div>
        <div style="height: 15%;">
          <div class="progress-container" style="width: 280px;">
            <div id="progressbar-container" class="timeline-bar">
              <div id="progressbar"></div>
            </div>
          </div>
          <div class="progress-container" style="width: 860px;">
            <div id="progress-stack"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Alert message -->
    <div id="alert-message" class="regular-text">Alert Message</div>
  </div>

  <!-- Settings Prompt -->
  <div id="settings-container" style="display: none;">
    <div id="settings-prompt">
      <div id="zip-container" class="settings-container"></div>
      <div id="advanced-settings-options" class="settings-container hidden"></div>
    </div>
  </div>

</body>

</html>
