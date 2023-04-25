import React, { Component } from "react";
import ImageSlider, { Slide } from "react-auto-image-slider";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import '../App.css';

class Home extends Component {
  render() {
    const images = [
      { url: 'https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/etc/KakaoTalk_20230424_104059763_06.jpg' },
      { url: 'https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/etc/KakaoTalk_20230424_104059763_02.jpg' },
      { url: 'https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/etc/KakaoTalk_20230424_104059763.jpg' }
    ]
    const width = "80%"
    const height = "100%"
    return (
      <div className='App'>
        <div>
          <div className='App-header'>
            <div className="header1">
              <div className="header">
                Layout1
              </div>
              <div className="header">
                <Link to="/"><img className='logo' src='./image/test4.png' alt=''></img></Link>
              </div>
              <div className="header">
                <div className="headerimage">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/klEQVR4nO2SzwpBURCHP4qNsmRt4QV4AyvP4CWUjSWvYGlvpZQ5pBQvIC9gYc1WbCy4mjpHl/w7NykxNXU7853fb87MhZ8KAzXNtwsHEBNoGgg0BVoNiL9FvAtJgY4V39tUk47WlHHG3uJjSAmMrMBWoCxQEtjYs+kI0pEMBLICc9vtykDB1fTbngWO8TIQyAksrMByAPlHjJfBEIoG1lZ81oPMPVZryjgDvfus8/N8BSY6X589Cex0TzdBAxX3h2i2IfHSkwFlQ6NSjcoF0IeqgYP3PEMRvitwFKg/BPEM8+q9a9CEOruV32NARO5vEEQe0b1l+nKfN/gHV3ECWOYKvF+rthIAAAAASUVORK5CYII=" alt="1" />
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABCElEQVR4nO2UTW7CQAyFv2tQjgS9Dj9rot6mUjysAxKIA7V00xWVUyNFgzMOyRZLXmTy7Ge/Nwm8YkwkeBc4CvwkuJXSMAeB5dDmH1HT1E9WhZMb+FdgVcNbNJBiBNZaYyT9m6gsBloPWpd2qIvAOcHGhmtK4KuC8slTx5Ncc20ucNIaI/guEbRaDvVEMs29+iKB50lJ86cJSp54mo/Z4KrPnzDLsXqWaz6aoHau6x7mtt3XFIKDnW1yrMB2skRq4N1kJdFNdHJr3ppcw2I0gZFUhWu6i+pzAldz+d+ksfeaTXfyrifRh9areRSeJx7oQXOCKHnSR1JN+F3vwlUdzW9Bup68gqHxBzMOOqJE3wXsAAAAAElFTkSuQmCC" alt="2" />
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAY0lEQVR4nGNgGAWkgM0MDF4bGRgeb2Jg+E8O3gjR64nTAkoM34TAj3BaAFNEkrdJ0T/gFmyiUH7gLSAEBr8Fm4Z8HGwatWDTQAcRITDwFmykQ3HtCVJAieEbGRg8yA0BhpEJAF/p79Hb23yaAAAAAElFTkSuQmCC" alt="3" />

                </div>
              </div>
            </div>
            <div>
              <ul className='no_dot'>
                <li className='left'><Link to="/menu"><a href="" className="hover">MENU</a></Link>&nbsp;&nbsp;</li>
                <li className='left'><Link to="/store"><a href="" className="hover">STORE</a></Link>&nbsp;&nbsp;</li>
                <li className='left'><Link to="/franchise"><a href="" className="hover">FRANCHISE</a></Link>&nbsp;&nbsp;</li>
                <li className='left'><Link to="/contact"><a href="" className="hover">CONTACT US</a></Link></li>
              </ul>
            </div>
          </div>

          <ImageSlider effectDelay={500} autoPlayDelay={2000}>
            <Slide>
              <img className='slide_image' alt="img2" src='https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/etc/KakaoTalk_20230424_104059763_06.jpg' />
            </Slide>
            <Slide>
              <img alt="img2" src='https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/etc/KakaoTalk_20230424_104059763_02.jpg' />
            </Slide>
            <Slide>
              <img alt="img1" src='https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/etc/KakaoTalk_20230424_104059763.jpg' />
            </Slide>
          </ImageSlider>
          {/* 
          <SimpleImageSlider
           width={width}
           height={height}
           images={images}
           showBullets={true}
           autoPlay={true}
           autoPlayDelay={1.0}
           showNavs={true}
          /> */}
        </div>
        <div className='main_text'>
          <img className='main_image' src='https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/etc/KakaoTalk_20230424_104059763_03.jpg' alt=''></img>
          <br /> <br /> <br />
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/klEQVR4nO2YMQrCQBBFXzprC2u9QsBK8BQpxNt4I29g6RFULK201cZCVgRtQtBJdidB/Q+2nccnu7OzASGEqCAHFsAK2AAXIPAlngwogO2zWNVKgatnBKzfFE4VxNUzAY6G4rFBXD1T4GosHhPE1TMETjWKNw3i6smMezU2iLunMBY8AHOg3yCEuyf70Ppeaw8MGgZoxZMbit+AcUSIVjwLg2AZGaIVz8ogmCUI4u7ZGQSPGzgWd8/ZIOglCOLuCSn7eJee8E9BQo3VmScoCPoiQVsLnRHUtUqo/aJ7BN3soXwwdEbQrIWmXzTGo/cIXbRFjSi4/0cQQggh+AnuEzNJL2yPVmMAAAAASUVORK5CYII="></img>
          <h1>&nbsp;태양,</h1>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZklEQVR4nO2YrUpEURRGV9BqMhhEQaPVps1mMJhMitUHcIrBpBaDFovJFxCMRkEwmWTAN1CYJPiDgoowwXL3dxxnhrsv34Kb12LumXPP2WCMMcYYY4yp4KvPT918Ev8AeAXgvwDeA/AmiL8C+DOIzwH4IIRPgvgojO8C+DKEb4P4OoznAXgggidCeCRGg2eCq8B9n2LeaugrYgRYB27+GfRYU9+fmAG2gDPgFngAXguD2gl8PbNQEHSe2CeZLAjaI69PMlEQtExen2ROxHwAY+T1SVZE0CW5fZJ9EbRJbp+kHcQ8DWA5DtsXMi/exhG5fZJjsRnNktsXMt5dclVBp+T2SQ6DmGdgity+kGngJQhqkdsnuQhi7oBRcvtC1oKYT2CR3D55EekEQQfk9oX8LLOrIOa6O9DI6pOcBDGdAezCw/ZJWhUx78AS+X09R23QHF8Ru79itmmerzhqh+b6jDHGGENz+QaJpdKFA080egAAAABJRU5ErkJggg=="></img>
          <p className="main_foot_detail">
            <br />
            태양은 태양계의 중심이 되는 행성이지만 <br />
            매우 소중하거나 희망을 주는 존재를 말합니다.
            <br /><br />
            태양은 손님 한분한분을 소중히 모시며<br />
            모든분들이 희망찬 하루를 보내실수 있도록 돕겠습니다.<br /><br />

            태양 카페에 방문해 주신다면<br />
            항상 환한 미소로 고객님들을 마주하며 <br />
            태양처럼 열심히 빛을 낸다는 마음가짐으로 맞이하겠습니다.
          </p>
        </div>
        <br /> <br /> <br /> <br /> <br />
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nO3PAQ0AAAjDsPs3DQJQcNImE7AEAAAAALpNacebEQAAAABIiQXVSlulThnHbAAAAABJRU5ErkJggg=="></img>
        <br /><br /><br />
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/klEQVR4nO2YMQrCQBBFXzprC2u9QsBK8BQpxNt4I29g6RFULK201cZCVgRtQtBJdidB/Q+2nccnu7OzASGEqCAHFsAK2AAXIPAlngwogO2zWNVKgatnBKzfFE4VxNUzAY6G4rFBXD1T4GosHhPE1TMETjWKNw3i6smMezU2iLunMBY8AHOg3yCEuyf70Ppeaw8MGgZoxZMbit+AcUSIVjwLg2AZGaIVz8ogmCUI4u7ZGQSPGzgWd8/ZIOglCOLuCSn7eJee8E9BQo3VmScoCPoiQVsLnRHUtUqo/aJ7BN3soXwwdEbQrIWmXzTGo/cIXbRFjSi4/0cQQggh+AnuEzNJL2yPVmMAAAAASUVORK5CYII="></img>
        <h1>AII ABOUT TAEYANG</h1>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZklEQVR4nO2YrUpEURRGV9BqMhhEQaPVps1mMJhMitUHcIrBpBaDFovJFxCMRkEwmWTAN1CYJPiDgoowwXL3dxxnhrsv34Kb12LumXPP2WCMMcYYY4yp4KvPT918Ev8AeAXgvwDeA/AmiL8C+DOIzwH4IIRPgvgojO8C+DKEb4P4OoznAXgggidCeCRGg2eCq8B9n2LeaugrYgRYB27+GfRYU9+fmAG2gDPgFngAXguD2gl8PbNQEHSe2CeZLAjaI69PMlEQtExen2ROxHwAY+T1SVZE0CW5fZJ9EbRJbp+kHcQ8DWA5DtsXMi/exhG5fZJjsRnNktsXMt5dclVBp+T2SQ6DmGdgity+kGngJQhqkdsnuQhi7oBRcvtC1oKYT2CR3D55EekEQQfk9oX8LLOrIOa6O9DI6pOcBDGdAezCw/ZJWhUx78AS+X09R23QHF8Ru79itmmerzhqh+b6jDHGGENz+QaJpdKFA080egAAAABJRU5ErkJggg=="></img>
        <br /> <br /> <br /> <br /> <br />
        <img alt="img1" className="main_foot" src='https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/etc/KakaoTalk_20230424_104059763_05.jpg' />
        <br /><br />
        <p className="main_foot_detail">태양은 항상 빛나고 있지만, 때로는 구름에 가려 보이지 않을 때도 있다. <br />그러나 그것은 여전히 거기에 있으며, 언제든지 다시 비추기 시작할 것이다.</p>
        <br /><br />
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nO3PAQ0AAAjDsPs3DQJQcNImE7AEAAAAALpNacebEQAAAABIiQXVSlulThnHbAAAAABJRU5ErkJggg=="></img>
        <br /> <br /> <br /> <br />
        <img alt="img1" className="main_foot" src='https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/etc/KakaoTalk_20230424_104059763_04.jpg' />
        <br /><br />
        <p className="main_foot_detail">태양은 자신에게 온 어둠을 두려워하지 않는다.<br /> 그 대신 그것은 스스로 빛을 만들어 내며, 그 어둠을 밝혀낸다.</p>
        <br /><br />
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nO3PAQ0AAAjDsPs3DQJQcNImE7AEAAAAALpNacebEQAAAABIiQXVSlulThnHbAAAAABJRU5ErkJggg=="></img>
        <br /> <br /> <br /><br /> <br /> <br /><br /> <br /> <br />
        <div className="main-insta">
          <p className="main-insta-name">@taeyang</p>
          <p className="main-hstag">#동탄카페 #카페맛집</p>
          <div className="mn-content">
            <a href="https://www.instagram.com/taeyangcafe_su/?igshid=MDM4ZDc5MmU%3D" className="banner_img">
              <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20230424_162254956_01.jpg" alt="coffee"></img>
              <p className="hover_text">#동탄핫플</p>
            </a>
            <a href="https://www.instagram.com/taeyangcafe_su/?igshid=MDM4ZDc5MmU%3D" className="banner_img">

              <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20230424_162254956_02.jpg" alt="coffee"></img>
              <p className="hover_text">#태양카페</p>
            </a>
            <a href="https://www.instagram.com/taeyangcafe_su/?igshid=MDM4ZDc5MmU%3D" className="banner_img">

              <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20230424_162254956_03.jpg" alt="coffee"></img>
              <p className="hover_text">#햇살맛집</p>
            </a>
          </div>
        </div>
        <div className='App-footer'>
        </div>
      </div>
    )
  }
}

export default Home;