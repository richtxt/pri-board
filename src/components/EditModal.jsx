import { useState } from 'react'

function EditModal({ task, onSave, onClose }) {
    const [editedTask, setEditedTask] = useState({ ...task })

    const handleSubmit = (e) => {
        e.preventDefault()
        onSave(editedTask)
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <h2>Edit Task</h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Task Name</label>
                        <input
                            type="text"
                            value={editedTask.name}
                            onChange={(e) => setEditedTask({ ...editedTask, name: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Effort (1-5)</label>
                        <select
                            value={editedTask.effort}
                            onChange={(e) => setEditedTask({ ...editedTask, effort: Number(e.target.value) })}
                        >
                            {[1, 2, 3, 4, 5].map(n => (
                                <option key={n} value={n}>{n} - {['Trivial', 'Easy', 'Medium', 'Hard', 'Epic'][n - 1]}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Impact (1-5)</label>
                        <select
                            value={editedTask.impact}
                            onChange={(e) => setEditedTask({ ...editedTask, impact: Number(e.target.value) })}
                        >
                            {[1, 2, 3, 4, 5].map(n => (
                                <option key={n} value={n}>{n} - {['Minimal', 'Low', 'Medium', 'High', 'Critical'][n - 1]}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Urgency (1-5)</label>
                        <select
                            value={editedTask.urgency}
                            onChange={(e) => setEditedTask({ ...editedTask, urgency: Number(e.target.value) })}
                        >
                            {[1, 2, 3, 4, 5].map(n => (
                                <option key={n} value={n}>{n} - {['Someday', 'This Month', 'This Week', 'Soon', 'Now'][n - 1]}</option>
                            ))}
                        </select>
                    </div>

                    <div className="modal-actions">
                        <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
                        <button type="submit" className="save-btn">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditModal
