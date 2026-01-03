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

## 💬 Actual Prompts Used

Here are the exact prompts I used to build this app with AI assistance:

1. **Initial prompt** (with full challenge requirements):
   > "lets create a clean UI minamalist priorty board to help people organize their life, lets do something we can deploy quickly like vercel we have one hour we'll want to do a quick end to end implementation"

2. > "lets add some elegance with GSAP and react animation UI to the landing page and then have a simplistic dashboard"

3. > "ok the main landing page is only half the page and our dashboard is all black"

4. > "landing page is good but dashboard is all black"

5. > "ok this is no good I think we need a complete redesign lets make the task that should be being worked on big bold and in the middle with a box around it, the subsequent tasks below it centered and getting smaller as it goes down so each task a little smaller, remove all emojis from the app and give the app a shadcn type look even on the landing page"

6. > "ok great but we want to make the task at hand the main priorty and the rest of the tasks below it getting smaller almost like the tasks are on a cylinder and you should be able to read the whole task"

7. > "I want the main task to be at the top of the page then just a simple add task box with a plus icon to add it above it... we can leave the header Priority Board"

8. > "lets add a calculated time value to the right of the task in a big bold font based on the complexity of the task"

9. > "ok this is great add like 10 real life sounding tasks that an average person would have to do during the day work and non work related"

10. > "can we make it so you can click and drag and it spin cycles through the tasks"

11. > "Drag or scroll to cycle through tasks lets make this at the very bottom of the page and can we make the tasks a little closer together and exagerate the size difference"

12. > "lets make a way you can complete the task so it clears it out the list"

13. > "can we make our landing page have like cool gsap or react animation of typography letters falling into the page from the top, big ones that say 'Prioritize' for a nice wow factor"

14. > "ok can we push this to vercel"

15. > "lets make it so when you click the header it will go back to the landing page"

---

## 📜 License

MIT

---

Built with ⚡ by collaborating with AI
