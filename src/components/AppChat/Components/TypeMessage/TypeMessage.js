import React, { useState } from 'react'
import { IoIosSend } from 'react-icons/io'

function TypeMessage(props) {
    const { onSubmit } = props
    const [value, setValue] = useState('')

    const handleValueChange = (e) => {
        setValue(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        if (!onSubmit || value === '') return

        onSubmit(value)
        //set value after submit
        setValue('')
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit} className="chatuser-typemessage">
                <input placeholder="Nhập nội dung tin nhắn" type="text" value={value} onChange={handleValueChange} />
                <button type="submit">
                    <IoIosSend></IoIosSend>
                </button>
            </form>
        </div>
    )
}

export default TypeMessage
