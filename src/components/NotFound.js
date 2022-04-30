import '../styles/notFound.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

function NotFound() {
  return (
    <div>
      <Header/>
      <main>
        <div className="not-found-section">
          <p>Not found.</p>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default NotFound