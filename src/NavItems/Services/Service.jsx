import PropTypes from 'prop-types';

const Service = ({service}) => {
    const {title,img,price}=service
    return (
        <div>
            <div className="card h-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl h-64" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-orange-600'>Price:{price}</p>
  </div>
</div>
        </div>
    );
};
Service.propTypes={
service:PropTypes.object
}
export default Service;