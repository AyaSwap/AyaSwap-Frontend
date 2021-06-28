import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@becoswap-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/CakeStats'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'

const Hero = styled.div`
  background-image: url('/images/pan-bg.png');
  -webkit-box-align: center;
  align-items: center;
  background-position: center center, center center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: rgb(146 146 146 / 35%) 0px 0px 0px 3000px inset;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  margin: auto auto 25px;
  padding: 32px 16px;
  text-align: center;
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {t('Deko Finance')}
        </Heading>
        <Text>{t('The Best High Yield Farm & AMM on Binance Smart Chain.')}</Text>
       
        <Text>$6600 (DEKO-BNB LPs) Burned: </Text><a href="https://bscscan.com/tx/0x37856bff3bb5d5f052b1701fedc94214fa32bae37f2c839f93515bb90a80647e">Proof </a>
      </Hero>
      <Page>
        <div>
          <Cards>
            <FarmStakingCard />
            <LotteryCard />
          </Cards>
          <Cards>
            <CakeStats />
            <EarnAPRCard />
          </Cards>
        </div>
      </Page>
    </div>
  )
}

export default Home
