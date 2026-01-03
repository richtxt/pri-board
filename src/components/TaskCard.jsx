function TaskCard({ task, rank, isTop, position = 0, dragOffset = 0, onEdit, onDelete, onComplete }) {

    // Calculate estimated time based on effort
    const getEstimatedTime = (effort) => {
        const times = {
            1: '15m',
            2: '30m',
            3: '1h',
            4: '2h',
            5: '4h+'
        }
        return times[effort] || '1h'
    }

    // Calculate transform based on position in carousel
    const getTransformStyle = () => {
        if (isTop || position === 0) {
            return {
                transform: 'scale(1) translateY(0) rotateX(0deg)',
                opacity: 1,
                zIndex: 10
            }
        }

        // More dramatic scaling - drops faster
        const scale = Math.max(0.35, 1 - Math.abs(position) * 0.2)
        // Tighter spacing - less translateY
        const translateY = position * 35
        // More dramatic rotation
        const rotateX = position * 12
        // Faster fade
        const opacity = Math.max(0.15, 1 - Math.abs(position) * 0.25)

        return {
            transform: `scale(${scale}) translateY(${translateY}px) rotateX(${rotateX}deg)`,
            opacity,
            zIndex: 10 - Math.abs(position)
        }
    }

    const style = getTransformStyle()

    if (position === 0) {
        return (
            <div className="task-card top-ranked" style={style}>
                <div className="top-task-content">
                    <h2 className="top-task-name">{task.name}</h2>
                    <div className="top-task-meta">
                        <span>Score: {task.score.toFixed(2)}</span>
                        <span>Impact: {task.impact}/5</span>
                        <span>Urgency: {task.urgency}/5</span>
                        <span>Effort: {task.effort}/5</span>
                    </div>
                </div>
                <div className="top-task-time">
                    {getEstimatedTime(task.effort)}
                </div>
                <div className="task-actions">
                    <button className="action-btn complete" onClick={(e) => { e.stopPropagation(); onComplete(task.id); }} title="Complete">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </button>
                    <button className="action-btn" onClick={(e) => { e.stopPropagation(); onEdit(task); }} title="Edit">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                    </button>
                    <button className="action-btn delete" onClick={(e) => { e.stopPropagation(); onDelete(task.id); }} title="Delete">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="3,6 5,6 21,6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="task-card carousel-card" style={style}>
            <div className="task-rank">{rank}</div>

            <div className="task-info">
                <h3>{task.name}</h3>
                <div className="task-score">
                    Score: <span>{task.score.toFixed(2)}</span>
                </div>
            </div>

            <div className="task-time-small">
                {getEstimatedTime(task.effort)}
            </div>

            <div className="task-actions">
                <button className="action-btn complete" onClick={(e) => { e.stopPropagation(); onComplete(task.id); }} title="Complete">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </button>
                <button className="action-btn" onClick={(e) => { e.stopPropagation(); onEdit(task); }} title="Edit">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                </button>
                <button className="action-btn delete" onClick={(e) => { e.stopPropagation(); onDelete(task.id); }} title="Delete">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3,6 5,6 21,6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default TaskCard
