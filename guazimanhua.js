let body = $response.body;
if (body) {
    // 使用正则不区分大小写匹配 </head> 或 <body>，强制插入样式
    body = body.replace(/(<\/head>|<body[^>]*>)/i, '<style>.reader-tools{display:none!important;}</style>$1');
    $done({ body });
} else {
    $done({});
}
