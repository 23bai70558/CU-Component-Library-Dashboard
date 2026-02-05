# CU Component Library Dashboard

A simple Next.js application demonstrating basic UI components using Material UI.

## Features

- Dashboard with stat cards
- User management table
- Login and registration pages
- User profile page
- Responsive mobile-friendly design

## Tech Stack

- Next.js 15
- TypeScript
- Material UI
- Emotion CSS

## Quick Start

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/           # Pages
├── components/    # Reusable components
├── theme/        # Theme configuration
└── types/        # TypeScript types
```

## Pages

- **Dashboard** - Overview with stat cards and user table
- **Login** - User login form
- **Register** - User registration form
- **Profile** - User profile display
- **Settings** - Application settings

## Components

- **Navbar** - Top navigation bar
- **Sidebar** - Navigation menu
- **StatCard** - Metric cards
- **DataTable** - User data display
- **AuthForm** - Login/registration forms

## Learning Outcomes

This project demonstrates:
- Component-based architecture
- TypeScript for type safety
- Responsive design
- Form validation
- Material Design principles
- Navigation patterns

## 🎓 Academic Information

**Course:** Full Stack Web Development  
**Project:** Simple Component Library Dashboard  
**Developer:** John Smith  
**Email:** john.smith@university.edu  
**University:** Chandigarh University  

## License

Educational project for university coursework.

**Version:** 1.0.0  
**Last Updated:** February 2026

- `rows: TableRow[]` - Array of user data

**Features:**
- Sortable columns
- Status badges with color mapping
- Hover row highlighting

### AuthForm Component
**Props:**
- `type: 'login' | 'register'` - Form type
- `onSubmit: (data) => Promise<void>` - Submit handler

**Features:**
- Real-time validation
- Loading states
- Error messages per field

---

## 🧪 Testing Routes

- `/` → Redirects to dashboard
- `/dashboard` → Main analytics page
- `/login` → Authentication page
- `/register` → User registration
- `/profile` → User details
- `/settings` → App configuration

---

## 👨‍💻 Development Notes

### Code Quality Standards
- ESLint configuration enforced
- TypeScript strict mode enabled
- No console warnings in production
- Consistent naming conventions

### Best Practices Followed
- Component composition over inheritance
- Single Responsibility Principle
- DRY (Don't Repeat Yourself)
- Separation of concerns (types, components, pages)

---

## 📝 Viva Questions Reference

**Q1: Why TypeScript over JavaScript?**
- Type safety prevents runtime errors
- Better IDE autocomplete
- Self-documenting code
- Easier refactoring

**Q2: Why Material UI?**
- Pre-built accessible components
- Consistent design system
- Responsive by default
- Active community support

**Q3: What is the App Router?**
- Next.js 13+ routing system
- File-system based routing
- Server Components by default
- Improved performance

**Q4: How is responsiveness achieved?**
- MUI Grid system with breakpoints
- `useMediaQuery` hook for conditional rendering
- Mobile-first CSS approach
- Flexible layouts with flexbox

**Q5: Explain form validation approach:**
- Controlled components with React state
- Real-time validation on change
- Email regex pattern matching
- Client-side validation for UX (server-side would be added for production)

---

## 📦 Dependencies

```json
{
  "@mui/material": "^6.x",
  "@mui/icons-material": "^6.x",
  "@emotion/react": "^11.x",
  "@emotion/styled": "^11.x",
  "next": "^15.x",
  "react": "^19.x",
  "typescript": "^5.x"
}
```

---

## 🎓 Academic Compliance

**Course:** Full Stack Web Development  
**Experiment:** 2 - Design UI using Component Libraries  
**Submitted by:** John Smith  
**University:** Chandigarh University  

**Learning Outcomes Achieved:**
1. ✅ Understanding of component-based architecture
2. ✅ Implementation of responsive design principles
3. ✅ Form validation and user input handling
4. ✅ State management in React
5. ✅ Material Design implementation
6. ✅ TypeScript for type-safe development
7. ✅ Next.js App Router navigation
8. ✅ Accessibility best practices

---

## 🔄 Future Enhancements

- [ ] Backend API integration
- [ ] Authentication with JWT
- [ ] Dark mode theme toggle
- [ ] Data visualization charts
- [ ] Advanced table filtering
- [ ] Export data functionality
- [ ] User role management
- [ ] Real-time notifications

---

## 📞 Contact

**Developer:** John Smith  
**Email:** john.smith@university.edu  
**GitHub:** [Your GitHub Profile]

---

## 📄 License

This project is created for educational purposes as part of university coursework.

---

**Last Updated:** February 2026  
**Version:** 1.0.0  
**Status:** ✅ Evaluation Ready

