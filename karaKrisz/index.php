<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- <script>
    function get(name) {
        var r = /[?&]([^=#]+)=([^&#]*)/g,
            p = {},
            match;
        while (match = r.exec(window.location)) p[match[1]] = match[2];
        return p[name];
    }
    if (get("ref")) {
        setTimeout(() => {
            let url = get("ref");
            if (validUrls.find(e => e === url)) {
                window.location.href = url;
            }
        }, 500)
    }

    const validUrls = [
        "https://magicmomentexcursions.negocio.site/"
    ]
    </script> -->
</body>

</html>
<?php

require_once "vendor/autoload.php";

use chillerlan\QRCode\QRCode;
$data = "http://www.apartment-tenerife.eu/?ref=https://magicmomentexcursions.negocio.site/";

echo "<img src='".(new QRCode)->render($data)."' alt='QR code'/>";