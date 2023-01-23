//fetcher 함수
//API를 fetch하고 json 을 return 하는 함수
//fetcher 함수는 꼭 fetcher promise를 return 해야함
export async function fetchCoins() {
  return (await fetch("https://api.coinpaprika.com/v1/coins")).json();
}
