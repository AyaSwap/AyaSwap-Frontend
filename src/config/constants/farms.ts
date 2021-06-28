import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'DEKO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x704923893Eb29E989bB34f95cE57aC906613d907',
    },
    token: tokens.deko,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'DEKO-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xC5dc3795B50750209e9b8ea0947b5371ce6e3574',
    },
    token: tokens.deko,
    quoteToken: tokens.busd,
  },
  {
    pid: 10,
    lpSymbol: 'DEKO-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xB0EbFbf00707E2259525A1A546042bd109Cf7e6C',
    },
    token: tokens.deko,
    quoteToken: tokens.usdt,
  },
  {
    pid: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 15,
    lpSymbol: 'BTC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xF45cd219aEF8618A92BAa7aD848364a158a24F33',
    },
    token: tokens.btcb,
    quoteToken: tokens.busd,
  },
  {
    pid: 14,
    lpSymbol: 'BNB-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae',
    },
    token: tokens.usdt,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
    },
    token: tokens.eth,
    quoteToken: tokens.wbnb,
  },
   {
    pid: 5,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'LINK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x824eb9faDFb377394430d2744fa7C42916DE3eCe',
    },
    token: tokens.link,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 7,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7efaef62fddcca950418312c6c91aef321375a00',
    },
    token: tokens.usdt,
    quoteToken: tokens.busd,
  },
   {
    pid: 9,
    lpSymbol: 'BTC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x61eb789d75a95caa3ff50ed7e47b96c132fec082',
    },
    token: tokens.btcb,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 11,
    lpSymbol: 'SHIB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x6b7b3523a6660a5fce3c28e1536cc8dd8d57f7e0',
    },
    token: tokens.shib,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 12,
    lpSymbol: 'DOGE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xac109c8025f272414fd9e2faa805a583708a017f',
    },
    token: tokens.doge,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 13,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x2354ef4df11afacb85a5c7f98b624072eccddbb1',
    },
    token: tokens.usdc,
    quoteToken: tokens.busd,
  },
]

export default farms
