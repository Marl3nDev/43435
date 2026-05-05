function capitalizeFirst(str) {
  return str.replace(/^\s*\p{L}/u, char => char.toUpperCase());
}

export const LocationList = ({ items, focused, setValue }) => {

  const onMouseDown = ({ name, _id }) => setValue({
    name: capitalizeFirst(name),
    id: _id
  })

  return items.length > 0 && focused &&
    <ul className={'location-input__list'}>
      {items.map(item => (
        <li className={'location-input__item'} key={item._id}>
          <button
            className={'location-input__list-button'}
            type={'button'}
            onMouseDown={() => onMouseDown(item)}>
            {item.name}
          </button>
        </li>
      ))}
    </ul>
};
