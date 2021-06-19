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
    pid: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  
]

export default farms
