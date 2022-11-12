import { useState } from 'react';

function Card(){
    let [show, setShow] = useState(false)
    function myShow(){
        setShow(!show)
    }
    return(
        <div className="card">

            <div className="header" onClick={myShow}>
                <div className="left">
                    <img src={require('../images/user1.jpeg')} alt="" />
                    <p className='user-name'>Anonim user</p>
                    <div className="buttons">
                        <button>message</button>
                        <button>message</button>
                    </div>
                    
                </div>
                <div className="right">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, modi culpa totam explicabo delectus aspernatur iure assumenda, id dolores necessitatibus fugiat ex quam, eos sit nobis reiciendis neque itaque voluptatum?</p>
                </div>
            </div>

            {show ? <div className="main" id={show ? 'show' : 'not-show'}>
                <div className="checkbox">
                    <label htmlFor="">
                        <input type="checkbox" />
                        Car number
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" />
                        Phone number
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" checked/>
                        Fiends
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" checked/>
                        Family
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" />
                        Phone
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" />
                        Name Last name
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" />
                        Name Last name
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" />
                        House adress
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" />
                        Family about
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" />
                        Phone
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" />
                        Name Last name
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" />
                        Name Last name
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" />
                        House adress
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" />
                        Family about
                    </label>
                </div>
                <div className="desc">
                    <textarea name="" id="" cols="30" rows="10" readOnly value='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, modi culpa totam explicabo delectus aspernatur iure assumenda, id dolores necessitatibus fugiat ex quam, eos sit nobis reiciendis neque itaque voluptatum?'></textarea>
                </div>
            </div> : null}
            
            
            <div className="footer"></div>
        </div>
    )
}


export default Card;