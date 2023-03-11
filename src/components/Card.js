import React from 'react';

export default function Card(props) {
    const cardStyle = {
        width: '25rem',
        height: '40rem'
    };

    return (
        <div className='d-flex flex-wrap '>
            {props.projects.map(item => (
                <div className="card m-3 bg-light p-2 shadow-sm" key={item.id} style={cardStyle}>
                    <div className="bg-image">
                        <img
                            src={item.image}
                            className="img-fluid h-100 w-100 rounded shadow-sm "
                            alt="Sample"
                        />
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                        <h6 className="card-title h4 text-center shadow-sm rounded bg-dark color-w">{item.name}</h6>
                        <p className="card-text text-center ">{item.description}</p>
                        <div className="d-flex justify-content-between ">
                            <a href={item.repo} className="btn btn-light shadow">
                                View Repo
                            </a>
                            <a href={item.live} className="btn btn-dark shadow">
                                View Live
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}