import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter inital={false}>
      <motion.div style = {{ display: "inline-block"}}
      key = {useColorModeValue('light', 'dark')}
      initial = {{ opacity: 0, y: -20 }}
      animate = {{ opacity: 1, y: 0 }}
      exit = {{y: 20, opacity:0}}
      transition = {{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorScheme={useColorModeValue('purple', 'yellow')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
