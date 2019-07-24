export const withReadme = file => ({ readme: { sidebar: file } });
export const withPanel = (enabled = true) => ({
  options: { showPanel: enabled },
});
