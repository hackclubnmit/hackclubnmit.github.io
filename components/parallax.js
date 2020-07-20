import { useRef, useEffect, Fragment } from 'react';

const Parallax = (props) => {
	const parallaxDiv = useRef();

	useEffect(() => {
		window.addEventListener('scroll', onParallax);
		console.log('Scrolling');
	}, []);

	const onParallax = () => {
		const { parallaxSpeed } = props;
		const speed = parallaxSpeed ? parallaxSpeed : 3;
		let windowScrollTop = window.pageYOffset || document.body.scrollTop;
		let parallaxDivOffsetTop = parallaxDiv.current.offsetTop;
		let parallaxDivHeight = parallaxDiv.current.offsetHeight;
		let parallaxDivLimit = parallaxDivOffsetTop + parallaxDivHeight;

		if (windowScrollTop <= parallaxDivLimit) {
			parallaxDiv.current.style.backgroundPosition =
				'50% ' + (windowScrollTop - parallaxDivOffsetTop) / speed + 'px';
		} else {
			parallaxDiv.current.style.backgroundPositionY = '50% 0';
		}
	};

	const { children, imageUrl } = props;

	const styles = {
		backgroundImage: `url(${imageUrl})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'top',
		transition: 'background-position 0s linear',
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
