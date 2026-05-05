import PersonSvg from '@icons/person.svg?react';

export const ResultPassengersList = ({ seats }) => {
  return (
    <ul className="result__list">
      {seats.map((item, index) => (
        <li className="result__item" key={index}>
          <div className="result__item-person">
            <PersonSvg />
            <span>{item.is_child ? 'Детский' : 'Взрослый'}</span>
          </div>

          <div className="result__item-info">
            <p className="result__item-name">
              {item.person_info.first_name}{' '}
              {item.person_info.last_name}{' '}
              {item.person_info.patronymic}
            </p>

            <p className="result__info-value">
              Пол {item.person_info.gender ? 'Мужской' : 'Женский'}
            </p>

            <p className="result__info-value">
              Дата рождения {item.person_info.birthday}
            </p>

            <p className="result__info-value">
              {item.person_info.document_type}
              {item.person_info.document_type === 'паспорт' && ' РФ '}
              {item.person_info.document_data}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};