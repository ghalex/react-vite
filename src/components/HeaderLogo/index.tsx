import React, { FC } from 'react'
// import logo from './square.svg'
import { Box, Typography, useColorScheme } from '@mui/joy'

interface LogoProps {
  size?: number
}

const Logo: FC<LogoProps> = ({ size = 38 }) => {
  const { mode } = useColorScheme()
  const textColor = mode === 'light' ? 'var(--joy-palette-primary-500)' : 'var(--joy-palette-primary-200)'
  const logoColor = mode === 'light' ? 'white' : 'var(--joy-palette-neutral-900)'

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-center', gap: 1 }}>
      {/* <img src={logo} height={height} alt="Logo" /> */}
      <svg width={size} height={size} viewBox="0 0 250 250" fill={textColor} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip1)">
          <rect width="250" height="250"/>
          <path fill={logoColor} fillRule="evenodd" clipRule="evenodd" d="M159.135 63.9356C166.144 63.9356 171.827 58.4175 171.827 51.6106C171.827 44.8038 166.144 39.2857 159.135 39.2857C154.76 39.2857 150.902 41.4351 148.62 44.7057C139.006 49.3345 129.965 58.1225 123.94 69.812C121.637 74.2817 119.947 78.8399 118.847 83.3383C89.0036 83.9343 65 107.612 65 136.735C65 166.231 89.6243 190.143 120 190.143H175V135.708H174.99C174.461 108.481 152.95 86.2382 125.502 83.5907C126.397 79.6593 127.84 75.6628 129.858 71.7489C134.047 63.6206 140.013 57.2012 146.536 53.1184C147.302 59.214 152.65 63.9356 159.135 63.9356ZM150.9 135.708H150.938V165.75H120V165.724C103.463 165.452 90.1429 152.35 90.1429 136.226C90.1429 119.933 103.745 106.725 120.524 106.725C137.124 106.725 150.615 119.654 150.9 135.708ZM130.577 134.681C134.082 134.681 136.923 131.922 136.923 128.518C136.923 125.115 134.082 122.356 130.577 122.356C127.072 122.356 124.231 125.115 124.231 128.518C124.231 131.922 127.072 134.681 130.577 134.681Z"/>
        </g>
        <defs>
          <clipPath id="clip1">
            <rect width="250" height="250" rx="32"/>
          </clipPath>
        </defs>
      </svg>

      <Typography textColor={textColor} level='h4' >
        <strong>logo</strong>
        <Typography sx={{ opacity: 0.8 }}>here</Typography>
      </Typography>
    </Box>
  )
}

export default Logo
