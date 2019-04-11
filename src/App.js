import React, { useState } from 'react'
import { TextArea, Box, Layer, Button } from 'grommet'
import { Close } from 'grommet-icons'
import ReactMarkdown from 'react-markdown'

export default function App() {
  const [value, setValue] = useState(
    `
  Hi there 👋

  # Write some markdown ✏️

  ## Press preview 🕵

  ### Profit 💰
  `
  )
  const [show, setShow] = useState(false)

  return (
    <>
      <PreviewModal
        setValue={setValue}
        value={value}
        show={show}
        setShow={setShow}
      />
      <Editor value={value} setValue={setValue} setShow={setShow} />
    </>
  )
}

function PreviewModal({ value, setShow, show }) {
  return (
    <Box>
      <Button
        onClick={() => setShow(true)}
        label={'Markdown Preview'}
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
            <Preview value={value} />
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

function Editor({ setValue, value }) {
  return (
    <Box pad="medium" fill="vertical">
      <TextArea
        id="editor"
        value={value}
        name="editor"
        fill={true}
        plain={true}
        resize={false}
        onChange={e => setValue(e.target.value)}
        spellCheck="true"
        style={{ minHeight: '80vh' }}
      />
    </Box>
  )
}

function Preview({ value }) {
  return (
    <Box id="preview" fill="vertical" margin="medium" pad="medium">
      <ReactMarkdown source={value} />
    </Box>
  )
}
