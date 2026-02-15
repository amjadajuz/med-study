# Med-Study 📚

A modern React-based interactive platform for medical education, featuring rich content blocks, dark mode support, and responsive design.

## 🚀 Build & Run

### Prerequisites
- Node.js 20.19
- npm

### Development
```bash
npm install
npm run dev
```
The app will start at `http://localhost:5173/med-study`

### Production Build
```bash
npm run build
```

### Deploy
```bash
npm run deploy
```
Deploys to GitHub Pages at `https://yourusername.github.io/med-study`

### Linting
```bash
npm lint
```

## 🏗️ Architecture Decisions

### Component-Based Organization
Components are organized by responsibility:
- **`blocks/`** - Content block types (Heading, Paragraph, Comparison, etc.)
- **`common/`** - Shared UI components (Header, ShowMoreLessButton, SkeletonLoader)
- **`BlockRenderer.tsx`** - Router that maps block types to components

**Why:** Separation of concerns makes it easy to add new block types independently. Each block is a self-contained, reusable unit.

### Type System
- **`src/types/blocks.ts`** - Complete `Block` union type definition
  - Centralized, single source of truth
  - Prevents type duplication across components
  - Enables type-safe block rendering

**Why:** A union type ensures only valid block structures can be created, catching errors at compile time rather than runtime.

### Configuration & Constants
- **`src/const/config.ts`** - UI timings and layout dimensions
- **`src/const/styleVariants.ts`** - Reusable color/style objects
- **`src/const/jsonData.ts`** - Sample content (can be replaced with API calls)

**Why:** Extracting magic numbers and style definitions makes the codebase:
- DRY (Don't Repeat Yourself)
- Easy to theme/customize globally
- Testable without changing component code

## 🎨 Styling Approach

### Tailwind CSS + CSS Variables
We use **Tailwind CSS 4** with custom CSS variables for theming:

```css
/* theme.css */
:root {
  --color-primary: #1e40af;
  --color-secondary: rgb(37, 47, 76);
  --color-tertiary: #ea82a5;
  --color-background: #f8fafc;
  --color-foreground: #111827;
  --color-accent: #0ea5e9;
  --color-border: #d4dce6;
}

.dark {
  /* Dark mode overrides */
}
```

**Why this approach:**
1. **Flexibility** - Colors adapt to light/dark mode instantly
2. **Consistency** - Semantic color names (primary, secondary) instead of arbitrary colors
3. **Dark Mode** - Using CSS variables makes theme switching effortless
4. **Component Utilities** - `@layer components` defines reusable classes (`.card-base`, `.flex-center`)
5. **Small Bundle** - Tailwind's utility-first approach generates only used CSS

### Dark Mode Implementation
- Uses system preference as default
- Saves user choice to localStorage
- Smooth transitions between modes
- Accessible button with proper ARIA labels

## 📊 Content Structure

Content is defined as **composable blocks**:

```typescript
type Block = 
  | { type: "heading"; level: 1-4; text: string }
  | { type: "paragraph"; content: Array<{text, bold?, italic?}> }
  | { type: "comparison"; columns: Array<{title, items}> }
  | { type: "callout"; style: "info"|"warning"|"tip"|"note"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "mnemonic"; title: string; letters: Array<{letter, expansion}> }
  | { type: "flashcard"; front: string; back: string; tags: string[] }
```

**Why:** This design allows:
- Adding new block types without touching `BlockRenderer`
- Server-rendering structured content
- Easy migration from JSON to database-driven content

## ⚡ Performance Optimizations

1. **Scroll Listener Optimization** - Uses `requestAnimationFrame` to batch visual updates
2. **List Virtualization** - Lists show 3 items by default with "show more" to reduce DOM nodes
3. **Lazy Loading** - Skeleton loaders provide visual feedback during loading
4. **Component Extraction** - Render functions extracted outside components to prevent unnecessary recreation

## 🎣 Custom Hooks

### `useDarkMode`
Manages dark/light theme state with localStorage persistence.

**Features:**
- Detects system color scheme preference on first load
- Saves user preference to localStorage
- Applies `dark` class to document root for Tailwind dark mode
- Smooth transitions between themes

**Usage:**
```typescript
const { darkMode, setDarkMode } = useDarkMode();

const toggleDarkMode = () => {
  setDarkMode(!darkMode);
  if (!darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};
```

### `useScrollPosition`
Tracks scroll progress for the header's visual progress indicator.

**Features:**
- Calculates scroll progress as a percentage (0-100%)
- Uses `requestAnimationFrame` for performant scroll tracking
- Properly cleans up event listeners and animation frames
- Returns smooth, batched visual updates

**Usage:**
```typescript
const { scrollProgress } = useScrollPosition();
// scrollProgress value is used in Header to show visual scroll indicator
<div style={{ width: `${scrollProgress}%` }}></div>
```

**Why These Hooks:**
- **Separation of Concerns** - Logic separated from UI components
- **Reusability** - Can be used in multiple components without duplication
- **Testability** - Hooks can be tested independently
- **Cleaner Components** - Components focus only on rendering

## 🔮 Future Improvements (Given More Time)

### High Priority
1. **Content Management** 
   - Replace `jsonData.ts` with API integration (REST/GraphQL)
   - Create admin panel for content editing
   - Version control for content changes

2. **Advanced Features**
   - Progress tracking (user completion state per block)
   - Search/filter across blocks
   - Bookmarks and notes

3. **Performance**
   - Virtual list scrolling for large content
   - Code splitting per route
   - Data caching(We can use Tanstack query)
   - Image optimization

## 📦 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS 4** - Utility-first styling
- **React Router 7** - Client-side routing
- **Lucide React** - Icon library
- **ESLint** - Code quality

## 📝 Code Quality

- ✅ Full TypeScript coverage
- ✅ ESLint configured
- ✅ DRY principles applied
- ✅ Semantic HTML
- ✅ Accessible components
- ✅ Responsive design (mobile-first)
