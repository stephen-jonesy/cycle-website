
const onScroll = () => {
  const header = document.querySelector(".header");
  const tileImg = document.querySelectorAll('.tile-img');
  let scrollHeight = window.pageYOffset;

  if (scrollHeight > 200) {
    header.classList.add('active-header')
 
  } else {
    header.classList.remove('active-header')

  }

  const paralax = () => {
    tileImg.forEach(el => {
      el.style.transform = 'translateY(' + scrollHeight * .15 + 'px)';
    });

  }

  paralax();

}

const activeLink = (e) => {
  const scrollLinks = document.querySelectorAll(".scroll-link");
  console.log(e.target)
  scrollLinks.forEach(link => {
    link.classList.remove('active')
  });
  e.target.classList.add('active')
}

const navScroll = (e) => {
  e.preventDefault();
  let id;

  if (e.target.matches('.fa-chevron-down')) {
    id = e.target.parentElement.getAttribute("href").slice(1)

	}
  else {
    id = e.target.getAttribute("href").slice(1);

  }
  const element = document.getElementById(id);    
  let position = element.offsetTop;
  const navHeight = '60';
  let offset = position - navHeight;
  
  if(id === 'about') {
      window.scrollTo({
        left: 0,
        top: position,
    });
  
  }
  else {
      window.scrollTo({
        left: 0,
        top: offset,
    });
  
  }
}

const articleCarousell = () => {
  $('.carousell').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    dots: true,
    prevArrow: '.prev',
    nextArrow: '.next',
    responsive: [
        {
        breakpoint: 1400,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,

        },
    },
    {
        breakpoint: 1050,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,

        },
    },]
    
  });
}

const onLoad = () => {
  const loaderPage = document.querySelector('.loader-page')
  loaderPage.classList.remove('loader-page-active')
  
}

window.addEventListener("scroll", function () {
  onScroll()

})

document.addEventListener('click', function (e) {


	if (e.target.matches('.fa-chevron-down')) {
    navScroll(e)

	}

	if (e.target.matches('.scroll-link')) {
    activeLink(e)
    navScroll(e)

	}

},);

window.addEventListener('load', () => {
  onLoad()
});

articleCarousell()