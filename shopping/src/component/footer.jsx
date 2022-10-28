function Footer() {
    return ( 
        <>
        <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      </a>
      <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="/"><i className="bi bi-facebook w-25 h-25"></i></a></li>
      <li className="ms-3"><a className="text-muted" href="/"><i className="bi bi-instagram w-25 h-25"></i></a></li>
      <li className="ms-3"><a className="text-muted" href="/"><i className="bi bi-twitter "></i></a></li>
    </ul>
  </footer>
</div>
        </>
     );
}

export default Footer;