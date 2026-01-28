// Netlify Serverless函数：简单的Node接口
exports.handler = async (event, context) => {
  // 处理请求参数（比如GET请求的query）
  const query = event.queryStringParameters || {};
  const name = query.name || "默认用户";

  // 返回响应
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: `Hello ${name}`,
      timestamp: new Date().toISOString()
    })
  };
};
