import React from 'react';
import './Clientinfo.css'

const Clientinfo = (props) => {
    const { name, img, description,  } = props.client;
    return (
        
        <div className="card-group  ">
            
            <div className="card w-100 border-0  p-3 service-color shadow-lg  mb-5 bg-body rounded">
                <img src={img} className="card-img-top images" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p className="card-text ">{description}</p>
                </div>
                <div class="card-footer border-0">
                    <small class="text-muted">{Date}</small>
                </div>
                <div className='d-flex'>
                    <div className='d-flex gap-3 m-auto '>
                       
                        <h3> <i class="fab fa-whatsapp"></i></h3>
                        

                    </div>
                   
                </div>
            </div>
        </div>

    );
};

export default Clientinfo;