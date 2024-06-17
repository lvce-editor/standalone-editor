export const name = 'css.completion'

export const test = async ({
  FileSystem,
  Workspace,
  Main,
  Editor,
  Locator,
  expect,
}) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/test.css`, ` `)
  await Workspace.setPath(tmpDir)
  // await Extension.addNodeExtension('packages/extension')

  // act
  await Main.openUri(`${tmpDir}/test.css`)
  await Editor.setCursor(0, 0)
  await Editor.openCompletion()

  // assert
  const completions = Locator('#Completions')
  await expect(completions).toBeVisible()
  const completionItems = completions.locator('.EditorCompletionItem')
  await expect(completionItems.nth(0)).toHaveText('text-decoration')
}
