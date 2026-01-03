import { useState } from 'react'

function AddTaskModal({ onSave, onClose }) {
    const [task, setTask] = useState({
        name: '',
        effort: 3,
        impact: 3,
        urgency: 3
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!task.name.trim()) return
        onSave(task)
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <h2>Add Task</h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Task Name</label>
                        <input
                            type="text"
                            placeholder="What needs to be done?"
                            value={task.name}
                            onChange={(e) => setTask({ ...task, name: e.target.value })}
                            autoFocus
                        />
                    </div>

                    <div className="form-row-modal">
                        <div className="form-group">
                            <label>Effort (1-5)</label>
                            <select
                                value={task.effort}
                                onChange={(e) => setTask({ ...task, effort: Number(e.target.value) })}
                            >
                                {[1, 2, 3, 4, 5].map(n => (
                                    <option key={n} value={n}>{n}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Impact (1-5)</label>
                            <select
                                value={task.impact}
                                onChange={(e) => setTask({ ...task, impact: Number(e.target.value) })}
                            >
                                {[1, 2, 3, 4, 5].map(n => (
                                    <option key={n} value={n}>{n}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Urgency (1-5)</label>
                            <select
                                value={task.urgency}
                                onChange={(e) => setTask({ ...task, urgency: Number(e.target.value) })}
                            >
                                {[1, 2, 3, 4, 5].map(n => (
                                    <option key={n} value={n}>{n}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="modal-actions">
                        <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
                        <button type="submit" className="save-btn">Add Task</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTaskModal
