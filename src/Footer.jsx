export default function Footer() {
    return (
        <footer className="footer bg-body-tertiary py-3">
            <div className="container">
                <span className="text-secondary">&copy; Copyright {new Date().getFullYear()} by OStudio</span>
            </div>
        </footer>
    )
}