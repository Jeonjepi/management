import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

class Menu extends React.Component {
    render() {
        return (
            <div>
                <div className="Wrapper">
                    <div className='App'>
                        <div className='App-header'>
                            <div className="header1">
                                <div className="header">
                                    Layout1
                                </div>
                                <div className="header">
                                <Link to="/"><img className='logo' src='./image/test4.png' alt=''></img></Link>
                                </div>
                                <div className="header">
{/*                                   
                                    <Link to="/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/klEQVR4nO2SzwpBURCHP4qNsmRt4QV4AyvP4CWUjSWvYGlvpZQ5pBQvIC9gYc1WbCy4mjpHl/w7NykxNXU7853fb87MhZ8KAzXNtwsHEBNoGgg0BVoNiL9FvAtJgY4V39tUk47WlHHG3uJjSAmMrMBWoCxQEtjYs+kI0pEMBLICc9vtykDB1fTbngWO8TIQyAksrMByAPlHjJfBEIoG1lZ81oPMPVZryjgDvfus8/N8BSY6X589Cex0TzdBAxX3h2i2IfHSkwFlQ6NSjcoF0IeqgYP3PEMRvitwFKg/BPEM8+q9a9CEOruV32NARO5vEEQe0b1l+nKfN/gHV3ECWOYKvF+rthIAAAAASUVORK5CYII=" alt="1" /></Link>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABCElEQVR4nO2UTW7CQAyFv2tQjgS9Dj9rot6mUjysAxKIA7V00xWVUyNFgzMOyRZLXmTy7Ge/Nwm8YkwkeBc4CvwkuJXSMAeB5dDmH1HT1E9WhZMb+FdgVcNbNJBiBNZaYyT9m6gsBloPWpd2qIvAOcHGhmtK4KuC8slTx5Ncc20ucNIaI/guEbRaDvVEMs29+iKB50lJ86cJSp54mo/Z4KrPnzDLsXqWaz6aoHau6x7mtt3XFIKDnW1yrMB2skRq4N1kJdFNdHJr3ppcw2I0gZFUhWu6i+pzAldz+d+ksfeaTXfyrifRh9areRSeJx7oQXOCKHnSR1JN+F3vwlUdzW9Bup68gqHxBzMOOqJE3wXsAAAAAElFTkSuQmCC" alt="2" />
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAY0lEQVR4nGNgGAWkgM0MDF4bGRgeb2Jg+E8O3gjR64nTAkoM34TAj3BaAFNEkrdJ0T/gFmyiUH7gLSAEBr8Fm4Z8HGwatWDTQAcRITDwFmykQ3HtCVJAieEbGRg8yA0BhpEJAF/p79Hb23yaAAAAAElFTkSuQmCC" alt="3" /> */}

                                </div>
                            </div>
                            <div>
                                <ul className='no_dot'>
                                <li className='left'><Link to="/menu"><a href="#;" className="hover">MENU</a></Link>&nbsp;&nbsp;</li>
                            <li className='left'><Link to="/store"><a href="#;" className="hover">STORE</a></Link>&nbsp;&nbsp;</li>
                            <li className='left'><Link to="/franchise"><a href="#;" className="hover">FRANCHISE</a></Link>&nbsp;&nbsp;</li>
                            <li className='left'><Link to="/contact"><a href="#;" className="hover">CONTACT US</a></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="layout2">
                            <div>
                                <p className="intro1">MENU</p>
                                <p className="intro2">메뉴안내</p>
                            </div>
                            </div>

                            <div className="mn-container">
                                <div className="mn-header">
                                <p className="intro1">COFFEE</p>
                                </div>
                                <div className="mn-content">
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/COFFEE+/KakaoTalk_20230424_112414377.jpg" alt="coffee"></img>
                                    <p className="hover_text">아메리카노</p>
                                    </a>
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/COFFEE+/KakaoTalk_20230424_112414377_08.jpg" alt="coffee"></img>
                                    <p className="hover_text">말차 아인슈페너</p>
                                    </a>                                    
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/COFFEE+/KakaoTalk_20230424_112414377_07.jpg" alt="coffee"></img>
                                    <p className="hover_text">아인슈페너</p>
                                    </a>
                                </div>
                                <div className="mn-content">
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/COFFEE+/KakaoTalk_20230424_112414377_01.jpg" alt="coffee"></img>
                                    <p className="hover_text">카페라떼</p>
                                    </a>
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/COFFEE+/KakaoTalk_20230424_112414377_02.jpg" alt="coffee"></img>
                                    <p className="hover_text">카푸치노</p>
                                    </a>                                    
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/COFFEE+/KakaoTalk_20230424_112414377_03.jpg" alt="coffee"></img>
                                    <p className="hover_text">카라멜 마끼야또</p>
                                    </a>
                                </div>
                                <div className="mn-content">
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/COFFEE+/KakaoTalk_20230424_112414377_04.jpg" alt="coffee"></img>
                                    <p className="hover_text">카페모카</p>
                                    </a>
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/COFFEE+/KakaoTalk_20230424_112414377_05.jpg" alt="coffee"></img>
                                    <p className="hover_text">바닐라 라떼</p>
                                    </a>                                    
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/COFFEE+/KakaoTalk_20230424_112414377_06.jpg" alt="coffee"></img>
                                    <p className="hover_text">돌체라떼</p>
                                    </a>
                                </div>

                                <div className="mn-header">
                                <p className="intro1">NON COFFEE</p>
                                </div>
                                <div className="mn-content">
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/NON+COFFEE/KakaoTalk_20230424_112439958_01.jpg" alt="noncoffee"></img>
                                    <p className="hover_text">토피넛 라떼</p>
                                    </a>
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/NON+COFFEE/KakaoTalk_20230424_112439958_02.jpg" alt="noncoffee"></img>
                                    <p className="hover_text">미숫가루 라떼</p>
                                    </a>                                    
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/NON+COFFEE/KakaoTalk_20230424_112439958_03.jpg" alt="noncoffee"></img>
                                    <p className="hover_text">말차 라떼</p>
                                    </a>
                                </div>
                                <div className="mn-content">
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/NON+COFFEE/KakaoTalk_20230424_112439958_04.jpg" alt="noncoffee"></img>
                                    <p className="hover_text">딸기 라떼</p>
                                    </a>
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/NON+COFFEE/KakaoTalk_20230424_112439958_05.jpg" alt="noncoffee"></img>
                                    <p className="hover_text">크림딸기 라떼</p>
                                    </a>                                    
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/NON+COFFEE/KakaoTalk_20230424_112439958.jpg" alt="noncoffee"></img>
                                    <p className="hover_text">초코 라떼</p>
                                    </a>
                                </div>

                                <div className="mn-header">
                                <p className="intro1">ADE</p>
                                </div>
                                <div className="mn-content">
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/ADE+/KakaoTalk_20230424_112459022_01.jpg" alt="ade"></img>
                                    <p className="hover_text">자몽 에이드</p>
                                    </a>
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/ADE+/KakaoTalk_20230424_112459022_02.jpg" alt="ade"></img>
                                    <p className="hover_text">유자 에이드</p>
                                    </a>                                    
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/ADE+/KakaoTalk_20230424_112459022.jpg" alt="ade"></img>
                                    <p className="hover_text">레몬 에이드</p>
                                    </a>
                                </div>

                                <div className="mn-header">
                                <p className="intro1">TEA</p>
                                </div>
                                <div className="mn-content">
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/TEA+/KakaoTalk_20230424_112508168.jpg" alt="ade"></img>
                                    <p className="hover_text">얼그레이 복숭아 아이스티</p>
                                    </a>
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/TEA+/KakaoTalk_20230424_112508168_01.jpg" alt="ade"></img>
                                    <p className="hover_text">허니 자몽 블랙티</p>
                                    </a>                                    
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/TEA+/KakaoTalk_20230424_112508168_02.jpg" alt="ade"></img>
                                    <p className="hover_text">레몬차</p>
                                    </a>
                                </div>
                                <div className="mn-content">
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/TEA+/KakaoTalk_20230424_112508168_03.jpg" alt="ade"></img>
                                    <p className="hover_text">자몽차</p>
                                    </a>
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/TEA+/KakaoTalk_20230424_112508168_04.jpg" alt="ade"></img>
                                    <p className="hover_text">캐모마일</p>
                                    </a>                                    
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/TEA+/KakaoTalk_20230424_112508168_05.jpg" alt="ade"></img>
                                    <p className="hover_text">크림 카라멜</p>
                                    </a>
                                </div>

                                <div className="mn-header">
                                <p className="intro1">SMOOTHIE</p>
                                </div>
                                <div className="mn-content">
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/SMOOTHIE/KakaoTalk_20230424_112524879.jpg" alt="ade"></img>
                                    <p className="hover_text">블루베리 요거트 스무디</p>
                                    </a>
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/SMOOTHIE/KakaoTalk_20230424_112524879_01.jpg" alt="ade"></img>
                                    <p className="hover_text">딸기 요거트 스무디</p>
                                    </a>                                    
                                </div>
                                <div className="mn-content">
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/SMOOTHIE/KakaoTalk_20230424_112524879_02.jpg" alt="ade"></img>
                                    <p className="hover_text">딸기 주스</p>
                                    </a>
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/SMOOTHIE/KakaoTalk_20230424_112524879_03.jpg" alt="ade"></img>
                                    <p className="hover_text">토마토 주스</p>
                                    </a>                                    
                                </div>

                                <div className="mn-header">
                                <p className="intro1">DESSERT</p>
                                </div>
                                <div className="mn-content">
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/DESSERT+/KakaoTalk_20230424_112534786.jpg" alt="ade"></img>
                                    <p className="hover_text">롤롤 페스트리</p>
                                    </a>
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/DESSERT+/KakaoTalk_20230424_112534786_01.jpg" alt="ade"></img>
                                    <p className="hover_text">우유슈</p>
                                    </a>                                    
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/DESSERT+/KakaoTalk_20230424_112534786_02.jpg" alt="ade"></img>
                                    <p className="hover_text">초코쿠키슈</p>
                                    </a>
                                </div>
                                <div className="mn-content">
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/DESSERT+/KakaoTalk_20230424_112534786_03.jpg" alt="ade"></img>
                                    <p className="hover_text">크로크무슈</p>
                                    </a>
                                    <a href="#;" className="banner_img">
                                    <img className="mn-content-detail" src="https://taeyangmenu.s3.ap-northeast-2.amazonaws.com/DESSERT+/KakaoTalk_20230424_112534786_04.jpg" alt="ade"></img>
                                    <p className="hover_text">로투스 생크림 크로플</p>
                                    </a>                                    
                                </div>
                        </div>
                    </div>

                    <div className='App-footer'>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu