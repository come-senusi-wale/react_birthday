import React from "react";

let List = ({people}) => {
    return(
        <>
        {people.map((person) => {

            let {id, name, age, image} = person;

            return (
                <div className='come' key={id}>
                    <div className='img'>
                    <img src={image} alt="" />
                    </div>
                    <div className='list'>
                    <p>{name}</p>
                    <span>{age}</span>
                    </div>
                </div>
            )

        })}
        </>
    )
}

export default List;