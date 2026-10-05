if ($response.body) {
    let body = $response.body;
    let hideStyle = '<style>.reader-tools { display: none !important; }</style>';
    body = body.replace('</head>', hideStyle + '</head>');
    $done({ body });
} else {
    $done({});
}
