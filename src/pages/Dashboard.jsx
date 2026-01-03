import { useState, useEffect, useRef } from 'react'
import TaskCard from '../components/TaskCard'
import EditModal from '../components/EditModal'
import AddTaskModal from '../components/AddTaskModal'

const STORAGE_KEY = 'prioritization-board-tasks'

const SAMPLE_TASKS = [
    { id: 1, name: 'Finish quarterly report for Monday meeting', effort: 4, impact: 5, urgency: 5 },
    { id: 2, name: 'Reply to urgent client emails', effort: 2, impact: 4, urgency: 5 },
    { id: 3, name: 'Pick up groceries for dinner', effort: 1, impact: 3, urgency: 4 },
    { id: 4, name: 'Schedule dentist appointment', effort: 1, impact: 2, urgency: 2 },
    { id: 5, name: 'Review and approve team pull requests', effort: 2, impact: 4, urgency: 3 },
    { id: 6, name: 'Call mom back', effort: 1, impact: 3, urgency: 3 },
    { id: 7, name: 'Prepare presentation slides for Thursday', effort: 3, impact: 5, urgency: 3 },
    { id: 8, name: 'Pay credit card bill', effort: 1, impact: 4, urgency: 4 },
    { id: 9, name: 'Go for a 30-minute run', effort: 2, impact: 3, urgency: 1 },
    { id: 10, name: 'Research vacation destinations for summer', effort: 2, impact: 2, urgency: 1 },
]

function Dashboard({ onBackToLanding }) {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved) {
            const parsed = JSON.parse(saved)
            if (parsed.length > 0) return parsed
        }
        return SAMPLE_TASKS
    })

    const [editingTask, setEditingTask] = useState(null)
    const [showAddModal, setShowAddModal] = useState(false)
    const [quickTaskName, setQuickTaskName] = useState('')

    // Carousel state
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [startY, setStartY] = useState(0)
    const [dragOffset, setDragOffset] = useState(0)
    const carouselRef = useRef(null)

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    }, [tasks])

    const calculateScore = (task) => {
        return ((task.impact * 2) + (task.urgency * 1.5)) / task.effort
    }

    const sortedTasks = [...tasks]
        .map(task => ({ ...task, score: calculateScore(task) }))
        .sort((a, b) => b.score - a.score)

    // Drag handlers
    const handleMouseDown = (e) => {
        setIsDragging(true)
        setStartY(e.clientY)
        setDragOffset(0)
    }

    const handleMouseMove = (e) => {
        if (!isDragging) return
        const delta = e.clientY - startY
        setDragOffset(delta)
    }

    const handleMouseUp = () => {
        if (!isDragging) return
        setIsDragging(false)

        // Calculate how many items to move based on drag distance
        const threshold = 80
        if (Math.abs(dragOffset) > threshold) {
            const direction = dragOffset > 0 ? -1 : 1
            const newIndex = currentIndex + direction
            if (newIndex >= 0 && newIndex < sortedTasks.length) {
                setCurrentIndex(newIndex)
            }
        }
        setDragOffset(0)
    }

    const handleMouseLeave = () => {
        if (isDragging) {
            handleMouseUp()
        }
    }

    // Touch handlers for mobile
    const handleTouchStart = (e) => {
        setIsDragging(true)
        setStartY(e.touches[0].clientY)
        setDragOffset(0)
    }

    const handleTouchMove = (e) => {
        if (!isDragging) return
        const delta = e.touches[0].clientY - startY
        setDragOffset(delta)
    }

    const handleTouchEnd = () => {
        handleMouseUp()
    }

    // Wheel handler for scroll
    const handleWheel = (e) => {
        e.preventDefault()
        const direction = e.deltaY > 0 ? 1 : -1
        const newIndex = currentIndex + direction
        if (newIndex >= 0 && newIndex < sortedTasks.length) {
            setCurrentIndex(newIndex)
        }
    }

    const handleQuickAdd = () => {
        if (!quickTaskName.trim()) {
            setShowAddModal(true)
            return
        }
        const task = {
            id: Date.now(),
            name: quickTaskName,
            effort: 3,
            impact: 3,
            urgency: 3,
            createdAt: new Date().toISOString()
        }
        setTasks([...tasks, task])
        setQuickTaskName('')
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleQuickAdd()
        }
    }

    const handleAddTask = (newTask) => {
        const task = {
            id: Date.now(),
            ...newTask,
            createdAt: new Date().toISOString()
        }
        setTasks([...tasks, task])
        setShowAddModal(false)
    }

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id))
        if (currentIndex >= sortedTasks.length - 1 && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const handleCompleteTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id))
        if (currentIndex >= sortedTasks.length - 1 && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const handleEditTask = (task) => {
        setEditingTask(task)
    }

    const handleSaveEdit = (updatedTask) => {
        setTasks(tasks.map(t => t.id === updatedTask.id ? updatedTask : t))
        setEditingTask(null)
    }

    // Get visible tasks around current index
    const getVisibleTasks = () => {
        const visible = []
        for (let i = -2; i <= 4; i++) {
            const index = currentIndex + i
            if (index >= 0 && index < sortedTasks.length) {
                visible.push({ task: sortedTasks[index], position: i, actualIndex: index })
            }
        }
        return visible
    }

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1 className="dashboard-title" onClick={onBackToLanding}>Priority Board</h1>
            </header>

            <div className="quick-add">
                <input
                    type="text"
                    className="quick-add-input"
                    placeholder="Add a task..."
                    value={quickTaskName}
                    onChange={(e) => setQuickTaskName(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button className="quick-add-btn" onClick={handleQuickAdd}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </button>
            </div>

            <div
                className={`carousel-container ${isDragging ? 'dragging' : ''}`}
                ref={carouselRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onWheel={handleWheel}
            >
                {sortedTasks.length === 0 ? (
                    <div className="empty-state">
                        <p>No tasks yet</p>
                    </div>
                ) : (
                    <div
                        className="carousel-track"
                        style={{
                            transform: `translateY(${dragOffset * 0.3}px)`
                        }}
                    >
                        {getVisibleTasks().map(({ task, position, actualIndex }) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                                rank={actualIndex + 1}
                                isTop={position === 0}
                                position={position}
                                dragOffset={isDragging ? dragOffset : 0}
                                onEdit={handleEditTask}
                                onDelete={handleDeleteTask}
                                onComplete={handleCompleteTask}
                            />
                        ))}
                    </div>
                )}

                <div className="carousel-hint">
                    Drag or scroll to cycle through tasks
                </div>
            </div>

            {showAddModal && (
                <AddTaskModal
                    onSave={handleAddTask}
                    onClose={() => setShowAddModal(false)}
                />
            )}

            {editingTask && (
                <EditModal
                    task={editingTask}
                    onSave={handleSaveEdit}
                    onClose={() => setEditingTask(null)}
                />
            )}
        </div>
    )
}

export default Dashboard
