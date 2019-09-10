import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11081.207062585483!2d-0.77094995!3d46.02512719999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1568105670024!5m2!1sfr!2sfr"
                width="100%"
                height="450"
                frameBorder="500px"
                allowFullScreen
                title="map"
            />
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;