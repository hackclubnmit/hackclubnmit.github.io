import { useRef, useEffect, Fragment } from 'react';

const Parallax = (props) => {
	const parallaxDiv = useRef();

	useEffect(() => {
		window.addEventListener('scroll', onParallax);
		onParallax(); // will set position initially
	}, []);

	// for top level -->  windowScrollTop > parallaxDivOffsetTop

	const onParallax = () => {
		const { parallaxSpeed } = props;
		const speed = parallaxSpeed ? parallaxSpeed : 3;
		let windowScrollTop = window.pageYOffset || document.body.scrollTop;
		let parallaxDivOffsetTop = parallaxDiv.current.offsetTop;
		let parallaxDivHeight = parallaxDiv.current.offsetHeight;
		let parallaxDivLimit = parallaxDivOffsetTop + parallaxDivHeight;

		console.log(parallaxDivOffsetTop, parallaxDivHeight, parallaxDivLimit);

		if (windowScrollTop <= parallaxDivLimit) {
			parallaxDiv.current.style.backgroundPosition =
				'50% ' + (windowScrollTop - parallaxDivOffsetTop) / speed + 'px';
		}
	};

	const { children, imageUrl } = props;

	const styles = {
		backgroundImage: `url(${imageUrl})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		transition: 'background-position 0s linear',
		height: '800px',
	};

	return (
		<Fragment>
			<div style={styles} ref={parallaxDiv}>
				{children}
			</div>
		</Fragment>
	);
};

export default Parallax;
