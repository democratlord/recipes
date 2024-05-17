export default function Footer() {
    return (
        <footer className="page-footer teal lighten-1">
            <div className="container">
                © {new Date().getFullYear()} @democratlord
            </div>
        </footer>
    );
}