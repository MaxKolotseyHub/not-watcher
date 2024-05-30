import axios from 'axios';

export async function getCryptoPrice(cryptoId: string, currency: string, prev: number = 0) {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=${currency}`;
    const response = await axios.get(url);
    if(response.status == 200) return response.data[cryptoId][currency];
    else return prev;
}