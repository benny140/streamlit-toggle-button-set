import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
  ComponentProps,
} from "streamlit-component-lib"
import React, { useEffect } from "react"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"

const ToggleButtonSet = ({ args }: ComponentProps) => {
  useEffect(() => Streamlit.setFrameHeight())
  const items = args.button_list
  const [formats, setFormats] = React.useState(() => args.default)
  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats)
    Streamlit.setComponentValue(newFormats)
  }

  return (
    <ToggleButtonGroup
      color={args.color}
      value={formats}
      onChange={handleFormat}
      size={args.size}
      exclusive={args.exclusive}
      fullWidth={args.use_container_width}
    >
      {items.map((item: string, index: number) => (
        <ToggleButton key={index} value={item}>
          {item}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}

export default withStreamlitConnection(ToggleButtonSet)
