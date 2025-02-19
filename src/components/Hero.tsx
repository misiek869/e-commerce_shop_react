import { Link } from 'react-router-dom'
import hero1 from '../assets/h1.jpg'
import hero2 from '../assets/h2.jpg'
import hero3 from '../assets/h3.jpg'

type carouselImage = {
	id: number
	img: string
}

const carouselImages: carouselImage[] = [
	{
		id: 0,
		img: hero1,
	},
	{
		id: 1,
		img: hero2,
	},
	{
		id: 2,
		img: hero3,
	},
]

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
				{carouselImages.map(image => {
					return (
						<div
							key={image.id}
							id={image.id}
							className='carousel-item relative w-full'>
							<img
								src={image.img}
								alt='Produto'
								className='rounded-sm h-full w-96 mx-auto object-cover'
							/>

							<div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
								<a href={`#${(image.id + 3) % 4}`} className='btn btn-circle'>
									❮
								</a>
								<a href={`#${(image.id + 1) % 4}`} className='btn btn-circle'>
									❯
								</a>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Hero
