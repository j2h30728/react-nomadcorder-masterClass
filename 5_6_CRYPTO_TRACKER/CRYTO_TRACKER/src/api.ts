//fetcher 함수
//API를 fetch하고 json 을 return 하는 함수
//fetcher 함수는 꼭 fetcher promise를 return 해야함

const BASE_URL = `https://api.coinpaprika.com/v1`;
export async function fetchCoins() {
  return (await fetch(`${BASE_URL}/coins`)).json();
}
export async function fetchCoinInfo(coinId: string | undefined) {
  return (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
}
export async function fetchCoinTrikers(coinId: string | undefined) {
  return (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
}

export async function fetchCoinHistory(coinId: string) {
  return (
    await fetch(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`)
  ).json();
}
export async function fetchCoinPrice(coinId: string) {
  return (
    await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
  ).json();
}
