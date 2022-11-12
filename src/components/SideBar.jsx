// import '.././Side.css'
import Footer from './Footer';
import Header from './Header';


function Side(){
    const  style = {};
    let username = 'nezrin';
    return(
        <nav>
            <Header />
            <ul>
                <li>
                    <a href="#">
                        <div className="left">
                            <img alt="" src={require('../images/./user2.jpeg')}/>
                        </div>
                        <div className="right">
                            <div style={{display:'flex'}}>
                                <p className="user-name">ferid</p>
                                <p className='date'>Jul 12</p>
                            </div>
                            <p className="message">Salam muxtar necesen?</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="left">
                            <img alt="" src={require('../images/./user1.jpeg')}/>
                        </div>
                        <div className="right">
                            <div style={{display:'flex'}}>
                                <p className="user-name">{username[0].toLocaleUpperCase()+username.slice(1, username.length)}</p>
                                <p className='date'>Jul 12</p>
                            </div>
                            <p className="message">mesaj test edildi</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="left">
                            <img alt="" src={require('../images/./user2.jpeg')}/>
                        </div>
                        <div className="right">
                            <div style={{display:'flex'}}>
                                <p className="user-name">ferid</p>
                                <p className='date'>Jul 12</p>
                            </div>
                            <p className="message">Salam muxtar necesen?</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="left">
                            <img alt="" src={require('../images/./user1.jpeg')}/>
                        </div>
                        <div className="right">
                            <div style={{display:'flex'}}>
                                <p className="user-name">{username[0].toLocaleUpperCase()+username.slice(1, username.length)}</p>
                                <p className='date'>Jul 12</p>
                            </div>
                            <p className="message">mesaj test edildi</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="left">
                            <img alt="" src={require('../images/./user2.jpeg')}/>
                        </div>
                        <div className="right">
                            <div style={{display:'flex'}}>
                                <p className="user-name">ferid</p>
                                <p className='date'>Jul 12</p>
                            </div>
                            <p className="message">Salam muxtar necesen?</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="left">
                            <img alt="" src={require('../images/./user1.jpeg')}/>
                        </div>
                        <div className="right">
                            <div style={{display:'flex'}}>
                                <p className="user-name">{username[0].toLocaleUpperCase()+username.slice(1, username.length)}</p>
                                <p className='date'>Jul 12</p>
                            </div>
                            <p className="message">mesaj test edildi</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="left">
                            <img alt="" src={require('../images/./user2.jpeg')}/>
                        </div>
                        <div className="right">
                            <div style={{display:'flex'}}>
                                <p className="user-name">ferid</p>
                                <p className='date'>Jul 12</p>
                            </div>
                            <p className="message">Salam muxtar necesen?</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="left">
                            <img alt="" src={require('../images/./user1.jpeg')}/>
                        </div>
                        <div className="right">
                            <div style={{display:'flex'}}>
                                <p className="user-name">{username[0].toLocaleUpperCase()+username.slice(1, username.length)}</p>
                                <p className='date'>Jul 12</p>
                            </div>
                            <p className="message">mesaj test edildi</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="left">
                            <img alt="" src={require('../images/./user2.jpeg')}/>
                        </div>
                        <div className="right">
                            <div style={{display:'flex'}}>
                                <p className="user-name">ferid</p>
                                <p className='date'>Jul 12</p>
                            </div>
                            <p className="message">Salam muxtar necesen?</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div className="left">
                            <img alt="" src={require('../images/./user1.jpeg')}/>
                        </div>
                        <div className="right">
                            <div style={{display:'flex'}}>
                                <p className="user-name">{username[0].toLocaleUpperCase()+username.slice(1, username.length)}</p>
                                <p className='date'>Jul 12</p>
                            </div>
                            <p className="message">mesaj test edildi</p>
                        </div>
                    </a>
                </li>
            </ul>
            <Footer />
        </nav>
    )
}


export default Side;