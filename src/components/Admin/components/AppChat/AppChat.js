import React from 'react'
import './AppChat.css'

import Contact from './Contact/Contact'
import Chat from './Chat/Chat'
function AppChat(props) {
    return (
        <section id="appchat">
            <span>Tin nhắn</span>
            <div className="appchat">
                <Contact />
                <div className="chat">
                    <Chat />
                </div>
            </div>
        </section>
    )
}

export default AppChat
