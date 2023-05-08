import React, { useEffect, useState } from 'react'
import axios from 'axios'

import io from 'socket.io-client'
import { IoMdChatboxes } from 'react-icons/io'

import { useSelector } from 'react-redux'

import './AppChat.css'
import { LineOutlined } from '@ant-design/icons'

import ListMessage from './Components/ListMessage.js/ListMessage'
import TypeMessage from './Components/TypeMessage/TypeMessage'

let socket

function AppChat(props) {
    const ENDPOINT = 'http://localhost:4000'
    const [messages, setMessages] = useState([])
    const [openChat, setOpenChat] = useState(false)
    const userSignin = useSelector((state) => state.getUsers)
    const { userInfo } = userSignin

    useEffect(() => {
        const getAllMessageByConversation = async () => {
            const { data } = await axios.get(`http://localhost:4000/chat/message?idUser=${userInfo._id}`)
            setMessages(data.messageList)
        }

        getAllMessageByConversation()
    }, [])

    useEffect(() => {
        socket = io(ENDPOINT)

        socket.emit('join_conversation', userInfo._id)
        //setup response
        socket.on('newMessage', (message) => {
            setMessages([...messages, message])
        })

        // disconnect ||cleanup the effect
        // return () => socket.disconnect();
        // eslint-disable-next-line
    }, [messages])

    useEffect(() => {
        const scrollMessage = () => {
            var element = document.querySelector('.chatuser-listmessage')
            element.scrollTop = element.scrollHeight
        }
        if (openChat) {
            scrollMessage()
        }
    })

    const handleChatFormSubmit = async (message) => {
        const sender = userInfo.name

        //emit create conversation and chat
        if (messages.length === 0) {
            socket.emit('create_conversation', userInfo)

            socket.on('response_room', async (conversation) => {
                const payload = {
                    sender,
                    message,
                    idConversation: conversation._id,
                }
                const { data } = await axios.post('http://localhost:4000/chat/save', payload)
                socket.emit('chat', data)
            })
        } else {
            const idConversation = messages[0].idConversation._id || messages[0].idConversation
            // request save message
            const payload = {
                sender,
                message,
                idConversation,
            }
            const { data } = await axios.post('http://localhost:4000/chat/save', payload)
            socket.emit('chat', data)
        }
    }

    return (
        <div className="appchat">
            {openChat ? (
                ''
            ) : (
                <div className="openchat" onClick={() => setOpenChat(!openChat)}>
                    <IoMdChatboxes />
                    <span>Chat</span>
                </div>
            )}

            {openChat ? (
                <div className="chatuser">
                    <div className="chatuser-user">
                        <span className="chatuser-user-name">Chat với nhân viên tư vấn</span>
                        <span className="chatuser-user-line" onClick={() => setOpenChat(!openChat)}>
                            <LineOutlined />
                        </span>
                    </div>

                    {messages ? <ListMessage messages={messages} user={userInfo}></ListMessage> : ''}

                    <TypeMessage onSubmit={handleChatFormSubmit}></TypeMessage>
                </div>
            ) : (
                ''
            )}
        </div>
    )
}

export default AppChat
