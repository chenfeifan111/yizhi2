/**
 * 示例1 post get请求响应
 * {
 * "name": "zs"
 *  "age":18
 * }
 * https://helloworld-5lo.pages.dev/helloworld?name=zs
 * @param context
 * @returns {Promise<Response>}
 */
// export async function onRequest(context) {
//     // 确保处理 POST 请求
//     if (context.request.method === "POST") {
//         try {
//             // 解析 JSON 数据
//             const body = await context.request.json();
//             // const name = body.name;  // 获取 JSON 中的 user 字段
//
//             // 返回包含 user 参数的响应
//             return new Response(`Hello ${JSON.stringify(body)}`);
//         } catch (error) {
//             return new Response("Invalid JSON or Error parsing JSON", { status: 400 });
//         }
//     }else if (context.request.method === "GET") {
//         const url = new URL(context.request.url);  // 获取请求 URL
//         const name = url.searchParams.get('name');  // 提取查询参数 `name`
//
//         // 返回包含 user 参数的响应
//         if (name) {
//             return new Response(name);
//         } else {
//             return new Response("User parameter is missing", { status: 400 });
//         }
//     }
//
//     // 如果不是 POST 请求，返回方法不允许的响应
//     return new Response("Method Not Allowed", { status: 405 });
// }

// import {AesManager} from "./aesManager";
//
// /**
//  * 示例2. aes加密效果
//  * {"sCustomerId":"","sCustomerName":""}
//  * @param context
//  * @returns {Promise<Response>}
//  */
// export async function onRequest(context) {
//     if (context.request.method === "POST") {
//         try {
//             // 解析 JSON 数据
//             const body = await context.request.json();
//             // 返回包含 user 参数的响应
//             const encrypted = AesManager.encrypt(body);
//             return new Response(encrypted);
//         } catch (error) {
//             return new Response("Invalid JSON or Error parsing JSON", { status: 400 });
//         }
//     }
// }




import {AesManager} from "./aesManager";

/**
 * 原来的飞书测试
 */
export function onRequest(context) {
    return handleRequest(context)
}

async function handleRequest(context) {
    if (context.request.method === "POST") {
        try {
            // 解析 JSON 数据
            const body = await context.request.json();
            // 返回包含 user 参数的响应
            const encrypted = AesManager.encrypt(body);
            const req={postData:encrypted}
            // return new Response(JSON.stringify(req));测试加密结果
            try {
                // const response = await fetch('https://prepublish-api.tongitspinoy.com/shareMgr/recordClickCnt', {
                const response = await fetch('http://uerida.natappfree.cc/shareMgr/recordClickCnt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                    },
                    body: JSON.stringify({
                        req
                    })
                });
            } catch (error) {

            }







            return new Response(JSON.stringify(req));
        } catch (error) {
            return new Response(error, { status: 400 });
        }
    }

}






