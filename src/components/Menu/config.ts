import { MenuEntry } from '@becoswap-libs/uikit'
import { usePriceCakeBusd } from 'state/hooks'

const cakePriceUsd = usePriceCakeBusd()
const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=BNB&outputCurrency=0x648259243f8a060c38b20dc16214cf0f928f49f1',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Referrals',
    icon: 'ReferralIcon',
    href: '/referrals',
  },
  {
    label: 'Audits/Reviews',
    icon: 'NftIcon',
    items: [
      {
        label: 'RugDoc',
        href: 'https://rugdoc.io/project/deko-finance/',
      },
      {
        label: 'Certik (Soon)',
        href: '#',
      },
      
    ],
  },
  {
    label: 'Countdown',
    icon: 'ChainIcon',
    href: 'https://bscscan.com/block/countdown/8677777',
  },

  
  
  {
    label: 'Analytics',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://pancakeswap.info/pair/0x704923893Eb29E989bB34f95cE57aC906613d907',
      },
      {
        label: 'Token',
        href: 'https://pancakeswap.info/token/0x648259243f8a060c38b20dc16214cf0f928f49f1',
      },
      {
        label: 'BSCScan',
        href: 'https://bscscan.com/token/0x648259243f8a060c38b20dc16214cf0f928f49f1',
      },
      {
        label: 'CMC (Soon)',
        href: '#',
      },
      {
        label: 'Coingecko (Soon)',
        href: '#',
      },
    ],
  },
  
  {
    label: 'Launchpad (Soon)',
    icon: 'IfoIcon',
    href: '#',
  },
  
  {
    label: 'Polygon (Soon)',
    icon: 'BridgeIcon',
    href: '#',
  },
  {
    label: 'cakePriceUsd={cakePriceUsd.toNumber()}',
    icon: 'BridgeIcon',
    href: '#',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Twitter',
        href: 'https://twitter.com/deko_finance',
      },
      {
        label: 'Voting (Soon)',
        href: '#',
      },
      {
        label: 'Github',
        href: 'https://github.com/dekofinance',
      },
      {
        label: 'Docs',
        href: 'https://dekofinance.medium.com/',
      },
      {
        label: 'Blog (Soon)',
        href: '#',
      },
    ],
  },
]

export default config
