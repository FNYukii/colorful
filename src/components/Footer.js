import '../styles/footer.css'
import logo from '../images/logo-white.png'
import { FaTwitter, FaFacebookSquare, FaInstagram} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
			<div className="large-container">

				<div className="row">

					<div className="column01">
						<a href='/'>
							<img className='logo' src={logo} height='50'/>
						</a>
						<p>Officia vero odit dolore dignissimos aliquid. Lorem ipsum dolor sit. Amet consectetur adipisicing elit. Ducimus ad minima totam enim quaerat.</p>
					</div>
		
					<div className="column02">
						<h3>Page links</h3>
						<ul className="global-nav">
							<li><a href="/">Top</a></li>
							<li><a href="/products">Products</a></li>
							<li><a href="/contact">Contact</a></li>
						</ul>
					</div>
		
					<div className="column03">
						<h3>Connect with us</h3>
						<ul>
							<li>
                <a href="/"><FaTwitter/></a>
              </li>
							<li>
                <a href="/"><FaFacebookSquare/></a>
              </li>
							<li>
                <a href="/"><FaInstagram/></a>
              </li>
						</ul>
					</div>

				</div>

				<p className="copyright">Copyright 2022 Colorful.</p>

			</div>
		</footer>
  )
}

export default Footer