// src/components/Footer.tsx
import './Footer.css' // Optional: Create a separate CSS file for Footer styles if desired

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  )
}

export default Footer
