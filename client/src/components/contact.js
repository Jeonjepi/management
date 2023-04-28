import axios from "axios";
import { Link } from "react-router-dom";

function Contact() {

    // const [name, setName] = useState()
    // const [phoneNumber, setPhoneNumber] = useState()
    // const [region, setRegion] = useState()
    // const [descrip, setDescrip] = useState()

    // window.onload = function () {
    //     const nameInput = document.getElementById("name")
    //     const phoneNumberInput = document.getElementById("phoneNumber")
    //     const regionInput = document.getElementById("region")
    //     const descripInput = document.getElementById("descrip")
    //     const btn = document.getElementById("btn")

    //     btn.addEventListener("click", () => {
    //         const name = nameInput.value
    //         const phoneNumber = phoneNumberInput.value
    //         const region = regionInput.value
    //         const descrip = descripInput.value

    //         axios.post("http://54.180.26.148:5000/api/users", {
    //             name: name,
    //             phone_number: phoneNumber,
    //             region: region,
    //             description: descrip
    //         }).then((response) => {
    //             alert("신청이 완료 되었습니다.")
    //             console.log("res", response)
    //         })
    //         .catch(function (error) {
    //                 console.log("error", error)
    //         })
    //     })
    // }
    return (
        <div>
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
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAY0lEQVR4nGNgGAWkgM0MDF4bGRgeb2Jg+E8O3gjR64nTAkoM34TAj3BaAFNEkrdJ0T/gFmyiUH7gLSAEBr8Fm4Z8HGwatWDTQAcRITDwFmykQ3HtCVJAieEbGRg8yA0BhpEJAF/p79Hb23yaAAAAAElFTkSuQmCC" alt="3" />
                         */}
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
                        <p className="intro1">CONTACT</p>
                        <p className="intro2">점주 신청 / 문의</p>
                        <div>
                            <p className="intro3">신청 양식</p>
                            <form>
                                <input
                                    type="text"
                                    placeholder="이름"
                                    required
                                    id="name"
                                /><br />
                                <input
                                    type="text"
                                    placeholder="핸드폰 번호"
                                    required
                                    id="phoneNumber"
                                /><br />
                                <input
                                    type="text"
                                    placeholder="희망 지역"
                                    required
                                    id="region"
                                /><br />
                                <textarea
                                    id="descrip"
                                    placeholder=" 
                                    기타 문의사항"
                                />
                                <br />
                                <button onClick={(event) => {
                                    event.preventDefault();
                                    axios.post("http://54.180.26.148:5000/api/users", {
                                        name: document.getElementById('name').value,
                                        phone_number: document.getElementById('phoneNumber').value,
                                        region: document.getElementById('region').value,
                                        description: document.getElementById('descrip').value
                                    }).then((response) => {
                                        window.alert("신청이 완료 되었습니다.")
                                        window.location.href = "/"
                                    })
                                        .catch(function (error) {
                                            console.log("error", error)
                                        })
                                }}
                                    className="contact-btn" type="submit" value="Add contact"
                                    id="btn"
                                >제출</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div className='App-footer'>
            </div>
        </div>
    )
}

export default Contact
