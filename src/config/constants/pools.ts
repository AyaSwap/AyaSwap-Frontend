import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.deko,
    earningToken: tokens.deko,
    contractAddress: {
      97: '',
      56: '0xE30D1F5E94C8e45d473FCA48e66136D719D5401c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
  },
  
]

export default pools
