export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};

export const plateVariants = {
  hidden: {
    x: '120%',
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      duration: 1.8,
      delay: 0.5,
    },
  },
};

export function handleScroll(imageTrack) {
  const images = document.querySelectorAll('.image-track img');
  const firstImage = images[0];
  const lastImage = images[images.length - 1];
  
  if (firstImage.offsetLeft + firstImage.offsetWidth < 0) {
    // first image is out of view on the left, move it to the end
    imageTrack.appendChild(firstImage);
    imageTrack.scrollLeft += firstImage.offsetWidth;
  } else if (lastImage.offsetLeft > imageTrack.offsetWidth) {
    // last image is out of view on the right, move it to the beginning
    imageTrack.insertBefore(lastImage, firstImage);
    imageTrack.scrollLeft -= lastImage.offsetWidth;
  }
}

