import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Language and Tools that I use:   <br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src= "https://imgs.search.brave.com/7qvu_dNY6EHodkmP_bm3akDMDUiYjSxk35Bv3XuOjuA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS93aGF0aXMvaW1n/X3JlYWN0LmpwZw" alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src="https://imgs.search.brave.com/sDXS3IWHlItL53Dwu4oDtG8-5ydhvhQW28ByBeYMru8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MTUyZmNlZjEw/MTRjMGI1ZTQ5Njcu/cG5n" alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src="https://imgs.search.brave.com/b2nc_f74fU0DdweMKQdSMJ5Clf6rWIHZ_7juN5FBELM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8zODUt/Mzg1MDM1OV9pY29u/LW1vbmdvZGItbG9n/by1oZC1wbmctZG93/bmxvYWQucG5n" alt="Image" />
                                <h5>Mongodb</h5>
                            </div>
                            <div className="item">
                                <img src="https://imgs.search.brave.com/16ixYxcBgnqv4XXoosI2pIGU5Bq4U6Shk9-i1qfoouo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/Zmxhc2suc3Zn.svg" alt="Image" />
                                <h5>flask</h5>
                            </div>
                            <div className="item">
                                <img src="https://imgs.search.brave.com/piH4HoxxS9uyYLiS_N7tJHLyRpQhQ_0gvzbDkkfUfz4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0NfUHJvZ3Jh/bW1pbmdfTGFuZ3Vh/Z2Uuc3Zn.svg" alt="Image" />
                                <h5>C Lang</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
