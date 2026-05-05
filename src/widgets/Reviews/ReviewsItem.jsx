
export const ReviewsItem = ({ src, alt,name, children }) => {
  return (
      <div className={'reviews__slider-item'}>
        <img className={'reviews__img'} src={src} alt={alt} />
        <div className={'reviews__wrapper'}>
          <h5 className={'reviews__name'}>
            {name}
          </h5>
          <p className={'reviews__text'}>
            {children}
          </p>
        </div>
      </div>
  );
};
