import React from 'react'
import './education.scss';
import './education.css';
import {BsSearch} from 'react-icons/bs'

function Education() {
    console.log(product_card);
    const listItems = product_card.map((item) =>
    <div className="card" key={item.id}>
        <div className="card_img">
            <img src={item.thumb} />
        </div>
        <div className="card_header">
            <h2>{item.product_name}</h2>
            <p>{item.description}</p>
            <p className="price">{item.recyclable}</p>
            <div className="btn">See more...</div>
        </div>
    </div>

);
  return (
    <div className='container'>
        <form style={{
                display: "flex",
                flexDirection: "column",
                // backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center"
        }}>
            <label style = {
                {
                    // backgroundColor: "pink",
                    display: "flex",
                    flexDirection: "row",
                    // backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center"
                }
            }>
                <input type="text" name="name" placeholder="search" class="search_bar"/>
                <BsSearch className='search_button' size={30}/>
            </label>
            
        </form>
        
        <div className="main_content">
            
            {listItems}
        </div>

    </div>
    );
}

export default Education;



const product_card = [
    {
        id:1,
        product_name: "Plastic Bottle",
        description: "Wash before recycling",
        recyclable: "Recyclable",
        thumb: "./education/pb.jpg"
    }, 
    {
        id:2,
        product_name: "Paper",
        description: "Remove all staples",
        recyclable: "Recyclable",
        thumb: "./education/p.jpg"
    },
    {
        id:3,
        product_name: "Food Container",
        description: "Do not recycle",
        recyclable: "Not Recyclable",
        thumb: "./education/fc.jpg"
    },
    {
        id:4,
        product_name: "Aluminium Cans",
        description: "Wash before recycling",
        recyclable: "Recyclable",
        thumb: "./education/ac.jpg"
    },
    {
        id:5,
        product_name: "Food Waste",
        description: "Do not recycle",
        recyclable: "Not Recyclable",
        thumb: "./education/fw.jpg"
    },
    {
        id:6,
        product_name: "Cardboard",
        description: "Ensure it is clean",
        recyclable: "Recyclable",
        thumb: "./education/c.jpg"
    }
]