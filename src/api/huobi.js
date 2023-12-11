import http from "@/http/http.js"


export const getDetail = (type) => {
    return http({
        url:`https://api.huobi.pro/market/detail/merged?symbol=${type}usdt`
    })
}