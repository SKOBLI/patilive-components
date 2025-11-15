import { Button, styled } from 'tamagui'

export const Patibutton = styled(Button, {
  name: 'Patibutton',
  fontWeight: '$7',
  borderRadius: '$4',
  variants: {
    variant: {
      filled: {
        bg: '$color9',
        color: '$color1',
        pressStyle: { bg: '$color10' },
        hoverStyle: { bg: '$color8' },
      },
      outline: {
        bg: 'transparent',
        color: '$color10',
        borderColor: '$color8',
        borderWidth: 1,
        pressStyle: { bg: '$color3' },
        hoverStyle: { bg: '$color2' },
      },
      textbase: {
        bg: 'transparent',
        color: '$color10',
        borderWidth: 0,
        px: '$3',
        pressStyle: { bg: '$color3' },
        hoverStyle: { bg: '$color2' },
      },
    },
    tone: {
      red: {
        bg: '$red9',
        color: '$color1',
        hoverStyle: { bg: '$red8' },
        pressStyle: { bg: '$red10' },
      },
      black: {
        bg: '$color12',
        color: '$color1',
        hoverStyle: { bg: '$color11' },
        pressStyle: { bg: '$color10' },
      },
      white: {
        bg: '$color1',
        color: '$color12',
        hoverStyle: { bg: '$color2' },
        pressStyle: { bg: '$color3' },
        borderColor: '$color6',
        borderWidth: 1,
      },
      green: {
        bg: '$green9',
        color: '$color1',
        hoverStyle: { bg: '$green8' },
        pressStyle: { bg: '$green10' },
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    size: {
      small: { size: '$3' },
      medium: { size: '$4' },
      large: { size: '$5' },
    },
  } as const,
  defaultVariants: {
    size: 'medium',
    variant: 'filled',
    tone: 'black',
  },
})
