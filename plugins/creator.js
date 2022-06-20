let handler = function (m) {
  this.sendContact(m.chat, '+526538490293', '🖤ӄǟռɛӄɨIDK🔥', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
