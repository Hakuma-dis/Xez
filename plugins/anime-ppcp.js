import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let jsn = await fetch(`https://api-fgmods.ddns.net/api/couple?apikey=6sotNhAL`)
let json = await jsn.json()
conn.sendButton(m.chat, 'π±ππ’π', wm, json.result.boy,[['π Next π', `/${command}`]], m)
conn.sendButton(m.chat, 'πΆππππ', wm, json.result.girl,[['π Next π', `/${command}`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(ppcp|ppcouple)$/i
export default handler
