import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { AUDINDEX, EURINDEX, GBPINDEX, USDINDEX } from 'components/elements/symbols.js'

const Symbol = styled(Flex)`
    width: fit-content;
    margin: 0 2.4rem 1.6rem 0;

    svg {
        width: 32px;
        height: 32px;
        margin-right: 0.8rem;
    }
    ${Text} {
        font-weight: normal;
        width: 78px;
    }
`

const SmartFX = () => {
    return (
        <>
            <Symbol ai="center">
                <AUDINDEX />
                <Text>{localize('AUD Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <EURINDEX />
                <Text>{localize('EUR Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <GBPINDEX />
                <Text>{localize('GBP Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <USDINDEX />
                <Text>{localize('USD Index')}</Text>
            </Symbol>
        </>
    )
}

export default SmartFX
