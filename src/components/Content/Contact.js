// import { Link, NavLink } from "react-router-dom";
import Link from '@mui/material/Link';
import Grid from "@mui/system/Unstable_Grid/Grid";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FaFacebookSquare, FaInstagramSquare,  } from 'react-icons/fa';
import { TfiYoutube } from 'react-icons/tfi';


function Contact () {
    return (
        <div className="contact" >
            <Grid container columnSpacing={2} rowSpacing={2} className='warrper' >
                <Grid lg={6} md={6} sm={12} >
                    <div className="block">
                        <div className="block-title">
                            Đăng ký nhận bản tin
                        </div>
                        <div className="form-subscribe">
                            <input type="text" placeholder="Nhập email của bạn..." className="input-subscribe" />
                            <button type="submit" title="gửi" className="btn-subscribe">
                                <FontAwesomeIcon icon={faPaperPlane}/>
                            </button>
                        </div>
                    </div>
                </Grid>
                <Grid lg={6} md={6} sm={12}  >
                    <div className="block block-right">
                            <div className="block-title">
                                Kết nối ngay
                            </div>
                            <div className="form-subscribe icons">
                            <Link >
                                    <FaFacebookSquare className="icon"/>
                            </Link>
                            <Link>
                                <FaInstagramSquare className="icon"/>
                            </Link>
                            <Link>
                                <TfiYoutube className="icon"/>
                            </Link>
                            </div>
                        </div>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Contact;