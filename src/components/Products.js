import '../styles/products.css'

import TextSection from '../components/TextSection'
import GalleryItem from '../components/GalleryItem'

import header05 from '../images/header05.jpg'
import product01 from '../images/product01.jpg'
import product02 from '../images/product02.jpg'
import product03 from '../images/product03.jpg'
import product04 from '../images/product04.jpg'
import product05 from '../images/product05.jpg'
import product06 from '../images/product06.jpg'
import product07 from '../images/product07.jpg'
import product08 from '../images/product08.jpg'
import product09 from '../images/product09.jpg'
import product10 from '../images/product10.jpg'
import product11 from '../images/product11.jpg'
import product12 from '../images/product12.jpg'

function Products() {
  return (
    <div>
			<main>

				<TextSection isLarge={true} photo={header05} title='Products' text={`Debitis ipsum blanditiis aliquid obcaecati voluptatem quis, cupiditate beatae quae ipsa.\nEautem delectus tempora.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quae vel sequi quidem suscipit blanditiis perspiciatis quas atque corporis nam? Reprehenderit.`}/>

				<div className="section idea-section">
					<h2>Whole cakes</h2>
					<div className="idea-container">
						<GalleryItem title='Ilisum dolor alinuid obcaecati' href='' photo={product01}/>
						<GalleryItem title='Delectus temsiora voluptatem' href='' photo={product02}/>
						<GalleryItem title='Volumtatem temra ipsum' href='' photo={product03}/>
						<GalleryItem title='Blanditiis reprehenderit' href='' photo={product04}/>
						<GalleryItem title='Beatae aut suscipit' href='' photo={product05}/>
						<GalleryItem title='Corporis nam amet consectetur' href='' photo={product06}/>
					</div>
				</div>

				<div className="section idea-section last-section">
					<h2>Others</h2>
					<div className="idea-container">
				  	<GalleryItem title='Amet quis ilisum adicisicing' href='' photo={product07}/>
						<GalleryItem title='Consectetur elit' href='' photo={product08}/>
						<GalleryItem title='Suidem sedui vel quae ant' href='' photo={product09}/>
						<GalleryItem title='Aliquid amet ruis' href='' photo={product10}/>
						<GalleryItem title='Consectetur quis elit' href='' photo={product11}/>
						<GalleryItem title='Temtariza quis' href='' photo={product12}/>
					</div>
				</div>

      </main>	
		</div>
  )
}

export default Products