import React from 'react';

export const Personajes = ({ personajes = [] }) => {
    return (
        <div className="row">
            {
                personajes.map((item, i) => (
                    <div key={i} className="col">
                        <div className="card">
                            <img src={item.image} alt={item.name} />

                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <hr />
                                <p>Species: {item.species}</p>
                                    {
                                        (item.status === "Alive" ?
                                            <p>FALSE</p>
                                            :
                                            <p>TRUE</p>)
                                    }
                                <p>Status: {item.status}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Personajes;