# Priority Board - Smart Task Prioritization

**🏆 Built in 1-Hour Agentic Coding Challenge**

A web-based "Smart Prioritization Board" that helps users decide what to work on next based on effort, impact, and urgency scoring.

**Live Demo**: [https://pri-board.vercel.app](https://pri-board.vercel.app)

---

## 🎯 Challenge Requirements

This app was built as part of a 1-hour challenge designed to test AI collaboration skills:

### Core Requirements (All Completed ✅)

| Requirement | Status |
|-------------|--------|
| **Item Management** - Add, edit, delete tasks | ✅ |
| **Task Properties** - Name, Effort, Impact, Urgency | ✅ |
| **Dynamic Scoring** - Real-time priority calculation | ✅ |
| **Auto-Sorting** - Tasks sorted by priority score | ✅ |
| **Reasoning Output** - Explains why top task is ranked #1 | ✅ |
| **State-Driven UI** - No page reloads, instant updates | ✅ |

### Optional Features (Bonus)

| Feature | Status |
|---------|--------|
| localStorage persistence | ✅ |
| Time estimates based on effort | ✅ |
| Draggable carousel navigation | ✅ |
| Task completion (checkmark) | ✅ |
| Animated landing page | ✅ |

---

## 🧮 Scoring Algorithm

```javascript
score = (impact × 2 + urgency × 1.5) / effort
```

- **Higher impact** = Higher score (weighted 2x)
- **Higher urgency** = Higher score (weighted 1.5x)  
- **Higher effort** = Lower score (we prefer quick wins)

### Time Estimates

| Effort | Estimated Time |
|--------|----------------|
| 1 | 15 minutes |
| 2 | 30 minutes |
| 3 | 1 hour |
| 4 | 2 hours |
| 5 | 4+ hours |

---

## 🛠️ Tech Stack

- **React** (via Vite)
- **GSAP** - Falling letters animation
- **Vanilla CSS** - shadcn-inspired dark theme
- **localStorage** - Task persistence
- **Vercel** - Deployment

---

## ✨ Features

### 1. Dramatic Landing Page
- "PRIORITIZE" letters fall from the top with bounce physics
- Staggered animation timing for each letter
- Smooth fade-in for subtitle and CTA

### 2. Interactive Task Carousel
- Drag or scroll to cycle through tasks
- 3D cylinder perspective effect
- Top task is large and prominent
- Lower tasks scale down progressively

### 3. Smart Task Management
- Quick-add with Enter key
- Full modal for detailed task creation
- Edit and delete capabilities
- Complete button to clear finished tasks

### 4. Priority Intelligence
- Real-time scoring as values change
- Visual hierarchy emphasizes top priority
- Time estimates based on effort level

---

## 📁 Project Structure

```
src/
├── App.jsx           # Main app with page routing
├── App.css           # Complete styling (shadcn-inspired)
├── pages/
│   ├── Landing.jsx   # Animated hero with GSAP
│   └── Dashboard.jsx # Task management + carousel
├── components/
│   ├── TaskCard.jsx  # Individual task with 3D transforms
│   ├── AddTaskModal.jsx
│   └── EditModal.jsx
└── index.css         # Base styles
```

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 📝 Development Timeline

| Time | Milestone |
|------|-----------|
| 0:00 | Project scaffolding (Vite + React) |
| 0:05 | Core components structure |
| 0:15 | Scoring algorithm + sorting |
| 0:25 | CSS styling (shadcn theme) |
| 0:35 | CRUD functionality complete |
| 0:45 | Carousel navigation |
| 0:55 | GSAP landing animation |
| 1:00 | Deployed to Vercel |

---

## 🎨 Design Philosophy

- **Minimalist dark theme** - Easy on the eyes, modern aesthetic
- **Hierarchy through scale** - Most important task is visually dominant
- **Motion with purpose** - Animations provide feedback and delight
- **Touch-friendly** - Drag gestures work on mobile

---

## 🏁 Challenge Criteria Self-Assessment

| Criteria | Score | Notes |
|----------|-------|-------|
| **Correctness** | 9/10 | All features work, scoring is accurate |
| **Reasoning Quality** | 8/10 | Explains priority based on dominant factor |
| **Scope Discipline** | 9/10 | MVP complete, added polish features |
| **Code & Structure** | 8/10 | Clean component separation, readable state |

---

## 📜 License

MIT

---

Built with ⚡ by collaborating with AI
