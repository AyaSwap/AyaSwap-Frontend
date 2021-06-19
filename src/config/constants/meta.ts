import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'DekoFinance',
  description:
    'The most popular AMM on BSC by user count! Earn DEKO through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by DekoFinance), NFTs, and more, on a platform you can trust.',
  image: 'https://becoswap.com/images/hero.jpg',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | DekoFinance',
  },
  '/competition': {
    title: 'Trading Battle | DekoFinance',
  },
  '/prediction': {
    title: 'Prediction | DekoFinance',
  },
  '/farms': {
    title: 'Farms | DekoFinance',
  },
  '/pools': {
    title: 'Pools | DekoFinance',
  },
  '/lottery': {
    title: 'Lottery | DekoFinance',
  },
  '/collectibles': {
    title: 'Collectibles | DekoFinance',
  },
  '/ifo': {
    title: 'Initial Farm Offering | DekoFinance',
  },
  '/teams': {
    title: 'Leaderboard | DekoFinance',
  },
  '/profile/tasks': {
    title: 'Task Center | DekoFinance',
  },
  '/profile': {
    title: 'Your Profile | DekoFinance',
  },
}
