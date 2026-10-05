// Module dédié au rendu visuel des messages dans le DOM
export function renderMessages(messages, container) {
  if (!container || !Array.isArray(messages)) return;

  const elements = messages.map(({ role, text }) => {
    const li = document.createElement('li');
    const prefixe = role === 'user' ? 'Vous : ' : 'Cap Web : ';
    li.textContent = `${prefixe}${text}`;
    return li;
  });

  container.replaceChildren(...elements);
}
