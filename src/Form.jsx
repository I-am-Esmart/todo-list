import React, { useState } from "react"

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItemName) {
      return
    }
    addItem(newItemName)
    setNewItemName("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>To do list</h4>
        <input
          type="text"
          className="form-input"
          name="item"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type="submit" className="btn" onClick={addItem}>
          Add item
        </button>
      </form>
    </div>
  )
}

export default Form
