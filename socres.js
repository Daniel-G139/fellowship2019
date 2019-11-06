<head>
<script src="jquery-3.4.1.min.js"></script>
</head>
<body>
    <script>
    var eventsCmd = "https://apiv2.apifootball.com/?action=get_events&amp;from=2018-04-01&amp;to=2019-04-03&amp;league_id=149&amp;APIkey=2a1d5ccbc537877535144353dca79140185a109aa7a0204893cbba980095b653";
    $.getJSON(eventsCmd, function(data) {
        //data is the JSON string

    });
    </script>
</body>