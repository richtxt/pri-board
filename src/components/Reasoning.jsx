function Reasoning({ topTask }) {
    const getImpactLabel = (value) => {
        return ['minimal', 'low', 'medium', 'high', 'critical'][value - 1]
    }

    const getEffortLabel = (value) => {
        return ['trivial', 'low', 'medium', 'high', 'significant'][value - 1]
    }

    const getDominantFactor = () => {
        const impactContribution = topTask.impact * 2
        const urgencyContribution = topTask.urgency * 1.5

        if (impactContribution >= urgencyContribution && topTask.effort <= 2) {
            return 'high-impact-quick-win'
        } else if (urgencyContribution > impactContribution) {
            return 'urgency-driven'
        } else if (topTask.impact >= 4) {
            return 'impact-driven'
        } else if (topTask.effort <= 2) {
            return 'low-effort'
        }
        return 'balanced'
    }

    const dominantFactor = getDominantFactor()

    const getExplanation = () => {
        switch (dominantFactor) {
            case 'high-impact-quick-win':
                return (
                    <>
                        <strong>{topTask.name}</strong> ranks first because it combines{' '}
                        <strong>{getImpactLabel(topTask.impact)} impact</strong> with{' '}
                        <strong>{getEffortLabel(topTask.effort)} effort</strong> —
                        a high-value quick win.
                    </>
                )
            case 'urgency-driven':
                return (
                    <>
                        <strong>{topTask.name}</strong> ranks first due to time sensitivity.
                        Addressing urgent tasks prevents downstream bottlenecks.
                    </>
                )
            case 'impact-driven':
                return (
                    <>
                        <strong>{topTask.name}</strong> ranks first because of its{' '}
                        <strong>{getImpactLabel(topTask.impact)} impact</strong> potential —
                        the effort investment is worthwhile.
                    </>
                )
            case 'low-effort':
                return (
                    <>
                        <strong>{topTask.name}</strong> is a quick win with{' '}
                        <strong>{getEffortLabel(topTask.effort)} effort</strong>.
                        Build momentum before tackling larger items.
                    </>
                )
            default:
                return (
                    <>
                        <strong>{topTask.name}</strong> has the optimal balance of
                        impact, urgency, and effort for your next action.
                    </>
                )
        }
    }

    return (
        <div className="reasoning-panel">
            <div className="reasoning-content">
                <p>{getExplanation()}</p>

                <div className="reasoning-factors">
                    <span className="factor-tag">
                        Impact: {topTask.impact}/5
                    </span>
                    <span className="factor-tag">
                        Urgency: {topTask.urgency}/5
                    </span>
                    <span className="factor-tag">
                        Effort: {topTask.effort}/5
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Reasoning
