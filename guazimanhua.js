let body = $response.body;

if (body) {
    // 1. 采用高权重的选择器组合，确保完全隐藏 aside.reader-tools
    const ultraHideStyle = `
    <style>
      aside.reader-tools,
      aside[aria-label="阅读工具"],
      .reader-tools {
        display: none !important;
        visibility: hidden !important;
        width: 0 !important;
        height: 0 !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
    </style>
    `;
    
    // 2. 强行插入到 <body> 最顶部，确保优先渲染样式
    body = body.replace(/<body[^>]*>/i, '$&' + ultraHideStyle);$done({ body });
} else {
    $done({});
}
