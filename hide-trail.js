Hooks.on('refreshToken', (token) => {
  if (token.ruler) token.ruler.visible = false;
});
