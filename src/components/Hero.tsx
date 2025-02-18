import { Link } from 'react-router-dom'
import hero_1 from '../assets/h1.jpg'
import hero_2 from '../assets/h2.jpg'
import hero_3 from '../assets/h3.jpg'

const carouselImages: string[] = [hero_2, hero_3, hero_1]

const Hero = () => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
			<div>
				<h1 className='max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl'>
					A new era of shopping
				</h1>
				<p className='mt-8 max-w-xl text-lg leading-8'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
					animi, perspiciatis optio rerum ipsum fuga vitae. In necessitatibus
					nemo corporis, perferendis libero, molestias iusto vero minus
					reprehenderit obcaecati quidem blanditiis!
				</p>
				<div className='mt-10'>
					<Link to={'/products'} className='btn btn-warning rounded-sm'>
						All Products
					</Link>
				</div>
			</div>
			<div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-sm'>
				{carouselImages.map((image, index) => {
					return (
						<div key={index} className='carousel-item'>
							<img
								src={image}
								className='rounded-sm h-full w-80 object-cover'
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Hero
