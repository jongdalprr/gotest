// /api/train.js
export default async function handler(req, res) {
  const API_KEY = '73646e69466a657234366f45705247';
  const url = `http://swopenAPI.seoul.go.kr/api/subway/${API_KEY}/json/realtimeStationArrival/0/50/서울`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "데이터를 불러올 수 없습니다.", detail: e.message });
  }
}
