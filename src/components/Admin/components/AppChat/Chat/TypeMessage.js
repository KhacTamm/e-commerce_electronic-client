import React, {useState} from "react";
import { IoIosSend } from 'react-icons/io'
import "../AppChat.css"

function TypeMessage(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!onSubmit || value === "") return;

    onSubmit(value);
    //set value after submit
    setValue("");
  };
  return (
    <form onSubmit={handleFormSubmit} className="ad-chatuser-typemessage">
      <input
        placeholder="Nhập nội dung tin nhắn"
        type="text"
        value={value}
        onChange={handleValueChange}
      />
      <button className="btn-send" type="submit">
          <IoIosSend></IoIosSend>
          <span>Giử</span>
      </button>
    </form>
  );
}

export default TypeMessage;
