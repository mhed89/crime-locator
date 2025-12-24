import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={`container-fluid ${styles.footer}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-4">
            <p className="mb-0">
              Markus Hedenborn - Data från{' '}
              <a 
                href="https://brottsplatskartan.se" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Brottsplatskartan
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}