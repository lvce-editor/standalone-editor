const trimLines = (string) => {
  return string.split('\n').join('')
}

export const name = 'css.tab-completion'

export const test = async ({
  FileSystem,
  Workspace,
  Main,
  Locator,
  Editor,
  expect,
}) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(
    `${tmpDir}/test.css`,
    `h1 {
  h20
}`
  )
  await Workspace.setPath(tmpDir)

  // act
  await Main.openUri(`${tmpDir}/test.css`)
  await Editor.setCursor(1, 5)
  await Editor.executeTabCompletion()

  // assert
  const editor = Locator('.Viewlet.Editor')
  await expect(editor).toHaveText(
    trimLines(`h1 {
  height: 20px;
}`)
  )
}
