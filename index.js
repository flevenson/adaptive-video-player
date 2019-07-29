var config = {
  "key": "15f3c647-18b6-4ba6-a58e-d6a61355cbcc"
}

var container = document.getElementById('my-player');
var player = new bitmovin.player.Player(container, config);

var source = {
  "title": "Art of Motion",
  "description": "What is this event... Parcour?",
  "dash": '',
  "hls": '',
  "progressive": "//bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4",
}

let browser

function getBrowser() {
  if( navigator.userAgent.indexOf("Chrome") != -1 ) {
    return "Chrome";
  } else if( navigator.userAgent.indexOf("Opera") != -1 ) {
    return "Opera";
  } else if( navigator.userAgent.indexOf("MSIE") != -1 ) {
    return "IE";
  } else if(navigator.userAgent.indexOf("Safari") != -1)
  {
    return "Safari"
  } else if (agent.indexOf("edge") != -1) {
    return "Edge"
  } else if( navigator.userAgent.indexOf("Firefox") != -1 ) {
    return "Firefox";
  } else {
    return "unknown";
  }
}

  browser = getBrowser();

  var setSource = function() {
    if(browser === 'Chrome' || browser === 'Firefox') {
      source.dash = 'https://bitmovin-a.akamaihd.net/content/multi-codec/vp9/stream.mpd'
    } else if (browser === 'Edge' || browser === 'Safari') {
      source.dash = 'https://bitmovin-a.akamaihd.net/content/multi-codec/hevc/stream.mpd'
    } else {
      source.hls = 'https://bitmovin-a.akamaihd.net/content/multi-codec/h264/stream.mpd'
    }
  }

  window.onload = setSource()

  player.load(source).then(
    function() {
      console.log('Successfully created Bitmovin Player instance');
    },
    function(reason) {
      console.log('Error while creating Bitmovin Player instance');
    }
  );