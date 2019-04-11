import React, { useState } from 'react'
import { TextArea, Box, Layer, Button, Heading } from 'grommet'
import { Close, Edit } from 'grommet-icons'

export default function App() {
  return (
    <>
      <Modal />
      <Box align="center">
        <Preview />
      </Box>
    </>
  )
}

function Modal() {
  const [show, setShow] = useState(false)
  return (
    <Box>
      <Button
        label={<Edit color="light-6" />}
        onClick={() => setShow(true)}
        color="black"
        primary
      />
      {show && (
        <>
          <Layer
            onClickOutside={() => setShow(false)}
            onEsc={() => setShow(false)}
            full={true}
            margin="large"
          >
            <Editor />
          </Layer>
          <Button
            label={<Close />}
            plain={true}
            margin="small"
            alignSelf="end"
            onClick={() => setShow(false)}
          />
        </>
      )}
    </Box>
  )
}

function Editor() {
  const [value, setValue] = useState('test')
  return (
    <Box fill="vertical">
      <TextArea
        id="editor"
        value={value}
        name="editor"
        fill={true}
        onChange={e => setValue(e.target.value)}
      />
    </Box>
  )
}

function Preview() {
  return (
    <Box
      id="preview"
      fill="vertical"
      margin="large"
      width="900px"
      round="small"
      elevation="medium"
      pad="medium"
    >
      <Heading>Test</Heading>
    </Box>
  )
}
