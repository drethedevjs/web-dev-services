export default function Footer() {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer>
      &copy; 2024 - {currentYear} <span className="text-secondary">Honeystack</span>. All rights
      reserved.
    </footer>
  );
}
