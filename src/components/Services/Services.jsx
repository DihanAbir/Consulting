import React from 'react';
import SectionHeader from '../../utils/SectionHeader';

const Services = () => {

      const title={"backgroundColor" : "orange", "color": "white"}
      const topic={"backgroundColor" : "salmon", "color": "white"}

    return (
        <div>
            <SectionHeader  styleTitle= {title  }  styleTopic= {topic  }  topic= "Expert consulting" title="service demo"  />

            <div className="row">
                <div className="col-lg-3"></div>
            </div>

        </div>
    );
}

export default Services;
