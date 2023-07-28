import { TranslateFunction } from '@pancakeswap/localization'
import { SalesSectionProps } from '.'
import iceConeA from '../../../../../public/images/home/trade/iceconea.png'
import iceConeB from '../../../../../public/images/home/trade/iceconeb.png'
import bridgeA from '../../../../../public/images/home/bridge/bridge_a.png'
import bridgeB from '../../../../../public/images/home/bridge/bridge_b.png'
import earnIce from '../../../../../public/images/home/earn/ice.png'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade anything anywhere, hassle free'),
  bodyText: t(
    'Seamless trading across multiple chains with the best rates thanks to the built-in DEX aggregator.'
  ),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://wiki.icecreamswap.com/dex/swap',
    text: t('Learn'),
    external: true,
  },
  images: {
    attributes: [
      { src: iceConeA, alt: '' },
      { src: iceConeB, alt: '' },
    ],
  },
})

export const bridgeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Bridge securely between many chains'),
  bodyText: t(
    'IceCreamSwap allows direct bridging between many chains with ' +
      'its audited and battle tested smart contracts. ' +
      'The unique built-in faucet automatically drops you native tokens when you bridge to a new chain.'
  ),
  reverse: true,
  primaryButton: {
    to: '/bridge',
    text: t('Bridge Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://wiki.icecreamswap.com/dex/bridge',
    text: t('Learn'),
    external: true,
  },
  images: {
    attributes: [
      { src: bridgeA, alt: '' },
      { src: bridgeB, alt: '' },
    ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn, receive ICE tokens when providing liquidity'),
  bodyText: t('With liquidity farms, you can boost your passive income APY for liquidity provision.'),
  reverse: false,
  primaryButton: {
    to: '/farms',
    text: t('Farms'),
    external: false,
  },
  secondaryButton: {
    to: 'https://wiki.icecreamswap.com/dex/farm',
    text: t('Learn'),
    external: true,
  },
  images: {
    attributes: [{ src: earnIce, alt: '' }],
  },
})
