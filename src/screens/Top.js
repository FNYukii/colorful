import TextSection from '../components/TextSection';

import photo01 from '../images/orange-whole_cake.jpg';
import photo02 from '../images/blue-cupcakes.jpg';
import photo03 from '../images/colorful-cupcakes.jpg';
import photo04 from '../images/fluits-and-veggies.jpg';

function Top() {
	return (
		<div>
			<main>
				<TextSection isLarge={true} photo={photo01} title="No Sweets No life" text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n\nIpsum dolor sit amet consectetur adipisicing elit. Laboriosam, voluptate libero rerum quasi quisquam, voluptatum optio in ad, earum quos nesciunt error quis totam? Voluptatem quod nostrum numquam dicta quidem! Sit amet consectetur adipisicing.\n\nAsperiores facere quibusdam iure odit debitis nostrum consequatur, nam repudiandae modi voluptates. Provident commodi eligendi dicta, unde accusantium consectetur sapiente reiciendis ut libero magnam earum reprehenderit nulla optio assumenda. Dicta, ratione ea.\n\nEarum quos nesciunt error quis totam? Voluptatem.`}/>
				<TextSection photo={photo02} title='Colors draw your life' text={`Lorem ipsum dolor sit amet.\n\nRem ipsum dolor sit amet consectetur adipisicing elit. Culpa suscipit, quis eum asperiores necessitatibus iusto quibusdam? Culpa veniam voluptatum molestias.\n\nEm, ipsum dolor.\n\nVitae aut nam nisi? Pariatur, eaque et officiis eos consequuntur saepe fugit sequi officia natus itaque praesentium. Quaerat cumque ullam fuga itaque voluptatum tempore, ut a aliquam facere aut aliquid, iusto necessitatibus sequi atque voluptate officia, eius laboriosam maxime consequuntur voluptas at.Quia ad molestiae non hic doloribus libero aliquam voluptatem, provident voluptate rerum fuga deserunt pariatur dolor odio, reiciendis iste minima.`}/>
				<TextSection photo={photo03} title='Draw it with many colors' text={`Amet consectetur adipisicing.Lor sit amet consectetur adipisicing elit. Culpa suscipit, quis eum asperiores necessitatibus iusto quibusdam? Culpa veniam voluptatum molestias.\n\nDolor sit amet consectetur adipisicing elit. Laborum, amet cumque impedit quaerat quos quisquam explicabo. Provident optio fugiat inventore voluptatem culpa repudiandae vero cum possimus vitae corrupti, laborum doloribus ratione consequuntur quibusdam aut maiores ea quos eius quia nisi. Ipsa pariatur et aperiam. Iure minus deleniti aut dolore itaque.\nAdipisicing elit. Facere nihil ad officia nostrum aut, placeat eum. Voluptates modi aspernatur quo!`}/>
				<TextSection photo={photo04} title='Fluits and Veggies' text={`Ipsum dolor sit amet consectetur adipisicing elit. Culpa suscipit, quis eum asperiores necessitatibus iusto quibusdam? Culpa veniam voluptatum molestias.Orem ipsum dolor sit amet.Rem ipsum dolor sit, amet consectetur adipisicing.Lorem, ipsum dolor.\nNam quidem tenetur minima vero mollitia inventore in ullam iusto perspiciatis alias! Iste, qui consequuntur aspernatur cumque asperiores nobis enim, dolor corporis voluptate explicabo illum facere adipisci modi quo fugit amet aperiam eaque labore perspiciatis excepturi commodi totam natus veniam.\n\nIste, qui consequuntur aspernatur cumque asperiores nobis enim, dolor corporis voluptate explicabo.`}/>
			</main>
		</div>
	)
}

export default Top;