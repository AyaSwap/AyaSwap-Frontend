import React from 'react'
import styled from 'styled-components'
import { Text } from '@becoswap-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from './layout/Page'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Wrapper>
     <Text>{t('Loading...')}</Text>
    </Wrapper>
  )
}

export default PageLoader
