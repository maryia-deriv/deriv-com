import React from 'react'
import styled from 'styled-components'
import AutoCarousel from 'components/elements/auto-carousel.js'
import { SectionContainer } from 'components/containers/container'
import WebMoney from 'images/svg/payment-webmoney.svg'
import Sticpay from 'images/svg/payment-sticpay.svg'
import Banktransfer from 'images/svg/payment-bank-transfer.svg'
import Qiwi from 'images/svg/payment-qiwi.svg'
import Yandex from 'images/svg/payment-yandex.svg'
import Mastercard from 'images/svg/payment-mastercard.svg'
import Skrill from 'images/svg/payment-skrill.svg'
import PerfectMoney from 'images/svg/payment-perfect-money.svg'
import Fasapay from 'images/svg/payment-fasapay.svg'
import Payscale from 'images/svg/payment-payscale.svg'
import Netller from 'images/svg/payment-neteller.svg'
import Maestro from 'images/svg/payment-maestro.svg'
import InternetBankTransfer from 'images/svg/payment-internet-bank-transfer.svg'
import Visa from 'images/svg/payment-visa.svg'
import IWallet from 'images/svg/payment-i-wallet.svg'
import Paytrust from 'images/svg/payment-paytrust.svg'
import Jeton from 'images/svg/payment-jeton.svg'

const PaymentSection = styled(SectionContainer)`
    padding: 2.4rem 0;
`

const paymentArray = [
    Mastercard,
    Visa,
    Paytrust,
    Banktransfer,
    Netller,
    Skrill,
    IWallet,
    Jeton,
    InternetBankTransfer,
    WebMoney,
    Qiwi,
    Yandex,
    PerfectMoney,
    Maestro,
    Sticpay,
    Fasapay,
    Payscale,
]

const PaymentMethods = () => {
    return (
        <PaymentSection>
            <AutoCarousel
                items={paymentArray}
                carousel_width="70%"
                items_padding={32}
                transition_duration={650}
                transition_delay={250}
                transition_timing_function="linear"
            />
        </PaymentSection>
    )
}

export default PaymentMethods
