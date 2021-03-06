let handler = function (m) {
  this.sendContact(m.chat, '+50582733230', '🖤ӄǟռɛӄɨ🔥', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
