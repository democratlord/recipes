function Footer() {
    return <footer className="page-footer  red accent-3">
        <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} @democratlord
            <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
            </div>
          </div>
    </footer>
}
export {Footer};
