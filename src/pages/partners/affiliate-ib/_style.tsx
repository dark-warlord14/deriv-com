import styled from 'styled-components'
import { Card } from './_partner-card'
import { TRAP } from './_table'
import { Button } from 'components/form'
import { Flex } from 'components/containers'
import device from 'themes/device'
import { Text } from 'components/elements/typography'
import { TAlignSelf } from 'features/types'

type PointerProps = {
    ml?: string
    is_top?: boolean
}
type FormulaTopWrapperProps = {
    oneLine?: boolean
}

type FlexProps = {
    align_self?: TAlignSelf
}

export const FormulaBottomWrapper = styled(Flex)`
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 16px;
    height: auto;
`
export const FormulaContainer = styled(Flex)`
    width: 100%;
    height: 108px;
    margin: 16px 0 0;
    border-radius: 8px;
    border: 1.5px solid var(--color-grey-21);
    padding: 1.6rem;

    :first-child {
        margin: 0;
    }

    @media ${device.tabletL} {
        height: auto;
        margin: 8px 0 0;

        :first-child {
            margin: 8px 0 0;
        }
    }
`
export const FormulaContainerMobileOneLine = styled(Flex)`
    margin: 8px 0 0;
    border-radius: 8px;
    border: 1.5px solid var(--color-grey-21);
    padding: 1.6rem;
`
export const FormulaGreen = styled.span`
    display: inline-block;
`
export const FormulaHighlight = styled(Flex)`
    width: 100%;
    border-radius: 4px;
    background-color: var(--color-white);
    align-items: flex-start;

    @media ${device.tabletL} {
        flex-direction: column;
        max-width: 300px;
    }
`
export const FormulaResultGreen = styled.span`
    display: inline-block;
    color: var(--color-blue-5);
    margin-right: 0.8rem;
`
export const FormulaResult = styled.div`
    border-radius: 4px;
    background-color: var(--color-grey-39);
    padding: 0.8rem;
    margin-left: 2.4rem;

    @media ${device.tabletL} {
        margin-left: 0.8rem;
    }
`
export const FormulaTopWrapper = styled(Flex)<FormulaTopWrapperProps>`
    flex-direction: row;
    height: auto;
    margin-top: ${(props) => (props.oneLine ? '0' : '50px')};
    align-items: flex-start;
`
export const FormulaValueMobile = styled.div`
    display: inline-block;
    text-align: center;
    margin: 0 1.8rem;
    position: relative;
    font-size: 14px;
    font-weight: normal;
    color: var(--color-black-3);

    :first-child {
        margin: 0 2.4rem 0 0;
    }
    :last-child {
        margin: 0 0 0 2.4rem;
    }

    @media (max-width: 340px) {
        margin: 0 1.4rem;

        :first-child {
            margin: 0 1.6rem 0 0;
        }
        :last-child {
            margin: 0 0 0 1.6rem;
        }
    }
`
export const FormulaValueMobileOneLine = styled.div`
    display: inline-block;
    text-align: center;
    margin: 0 0.8rem;
    padding: 0.8rem 0;
    position: relative;
    font-size: 14px;
    font-weight: normal;
    line-height: 21px;
    color: var(--color-black-3);

    :first-child {
        margin: 0 0.8rem 0 0;
    }
    :last-child {
        margin: 0 0 0 0.8rem;
    }
`
export const FormulaValueResultSwapSynthetic = styled(Flex)`
    flex-direction: row;
    text-align: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: normal;
`
export const FormulaValueSwapSynthetic = styled.div`
    display: inline-block;
    text-align: center;
    font-size: 14px;
    line-height: 21px;
    color: var(--color-black-3);
    font-weight: normal;
    margin-top: 0.8rem;
    margin-left: 1.8rem;
    margin-right: 1.8rem;
`

export const PointerContainer = styled.div<PointerProps>`
    display: flex;
    margin-top: 8px;
    flex-direction: column;
    align-items: center;
    margin-left: ${(props) => props.ml || '0'};

    @media ${device.tabletL} {
        position: absolute;
        margin-top: ${(props) => (props.is_top ? '0' : '8px')};
        flex-direction: ${(props) => (props.is_top ? 'column-reverse' : 'column')};
        top: ${(props) => (props.is_top ? '-16px' : 'unset')};
        margin-left: ${(props) => (props.is_top ? '0' : '20px')};
        left: ${(props) => (props.is_top ? '50%' : 'unset')};
        transform: ${(props) => (props.is_top ? 'translate(-50%, -50%)' : 'unset')};
    }
`
export const PointerContainerMobile = styled.div<PointerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: ${(props) => props.ml || '0'};
`
export const PointerDot = styled.div`
    height: 5px;
    width: 5px;
    border: 1px solid black;
    border-radius: 50%;
    opacity: 0.1;
`
export const PointerStick = styled.div`
    position: relative;
    height: 16px;
    width: 1px;
    background-color: black;
    opacity: 0.1;
`
export const PointerText = styled.div<PointerProps>`
    font-size: 14px;
    font-weight: normal;
    color: var(--color-grey-5);
    position: absolute;
    margin-top: 20px;

    @media ${device.tabletL} {
        width: 110px;
        margin: ${(props) => (props.is_top ? '0 0 26px' : '26px 0 0')};
        right: ${(props) => (props.is_top ? '-8px' : 'unset')};
        left: ${(props) => (props.is_top ? 'unset' : '-20px')};
        text-align: ${(props) => (props.is_top ? 'right' : 'left')};
    }

    @media (max-width: 340px) {
        font-size: 12px;
    }
`
export const PointerTextMobile = styled.div`
    font-size: 14px;
    font-weight: normal;
    color: var(--color-grey-5);
    line-height: 21px;
    text-align: center;

    @media (max-width: 340px) {
        font-size: 12px;
    }
`
export const ResultStrong = styled.span`
    font-weight: bold;
    margin-right: 0.4rem;
    color: var(--color-black-3);
`

export const StyledCard = styled(Card)<FlexProps>`
    min-width: calc((100% - 4rem) / 3);
    width: calc((100% - 4rem) / 3);
    border-radius: 8px;
    margin-block-start: 0;
    ${({ align_self }) => align_self && 'align-self:' + align_self};

    @media ${device.laptopM} {
        min-width: 38.4rem;
        width: 38.4rem;
    }

    @media ${device.tabletL} {
        min-width: unset;
        padding: 24px 16px;
        margin-inline: auto;
        ${(props) => props.tabletHeight && 'height:' + props.tabletHeight};
    }

    @media ${device.mobileM} {
        min-width: unset;
        width: 100%;
    }
`

export const StyledTrap = styled(TRAP)`
    background-color: var(--color-grey-39);
    padding: 1rem 0.8rem;
    height: 40px;
    border-bottom: none;
`

export const StyledText = styled(Text)`
    font-size: 1.4rem;
    line-height: 1.5;
    text-align: center;
    @media ${device.tabletL} {
        font-size: 14px;
    }
`
export const CPAContent = styled.div`
    ${Text} {
        margin-top: 2.4rem;
    }
`
export const StyledBackButton = styled(Button)`
    border: 0.2rem solid var(--color-grey-5);
    color: var(--color-black);
    height: 4rem;
    inline-size: 100%;
    padding: 0 1.6rem;
`

export const StyledCardWrapper = styled(Flex)`
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-block-start: 1.6rem;

    @media ${device.tabletL} {
        flex-direction: column;
        align-items: center;
    }
    @media ${device.laptopM} {
        flex-wrap: wrap;
    }
`

export const StyledButtonWrap = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-block-start: 1.6rem;
`

export const StyledCalculatedButton = styled(Button)`
    border: none;
    color: var(--color-red);
    font-size: 1.4rem;
    background: none;

    @media ${device.tabletL} {
        font-size: 1.4rem;
    }
`
