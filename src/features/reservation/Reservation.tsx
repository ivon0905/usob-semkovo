import { FC, useState } from "react";
import "./reservation.css";
import doubleRoomImage from "../../images/rooms/dvoina.jpg";
import tripleRoomImage from "../../images/rooms/troika.png";
import apartmentImage from "../../images/rooms/apartment.jpg";
import services from '../../calls/services';

const Reservation: FC = () => {
  const [startDate, setStartDate] = useState<string>(new Date().toLocaleDateString("fr-CA", {year:"numeric", month: "2-digit", day:"2-digit"}));
  const [endDate, setEndDate] = useState<string>(new Date(Date.now() + ( 3600 * 1000 * 24)).toLocaleDateString("fr-CA", {year:"numeric", month: "2-digit", day:"2-digit"}));
  const [selectedRoomType, setSelectedRoomType] = useState(0);
  const [result, setResult] = useState<string>();
  const [roomId, setRoomId] = useState(0);
  const [isReservationSectionVisible, setIsReservationSectionVisible] = useState(false);
  const [isReservationSuccessful, setIsReservationSuccessful] = useState(false);

  const [roomPrice, setRoomPrice] = useState(0)
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [name, setName] = useState('')

  const handleOnSearchClicked = () => {
    if (startDate === '') {
      setResult('Изберете валидна начална дата!');
      setIsReservationSectionVisible(false);
    }      
    else if (endDate === '') {
      setResult('Изберете валидна крайна дата!');
      setIsReservationSectionVisible(false);
    }
    else if (startDate > endDate) {
      setResult('Избраната начална дата не може да бъде по-голяма от крайната!');
      setIsReservationSectionVisible(false);
    }
    else {
      retrieveEmptyRoomId();

      if (roomId > 0) {
        retrieveRoomPrice();
        setIsReservationSectionVisible(true);
      }
      else {
        setResult('Не бяха намерени резултати за избраните дати!');
        setIsReservationSectionVisible(false);
      }
    }
  }

  const handleOnReserveClicked = () => {
    createReservation();

    setResult('');
    setIsReservationSectionVisible(false);
    setIsReservationSuccessful(true);
  }

  const retrieveEmptyRoomId = () => {
    services.getEmptyRoomId(selectedRoomType, startDate, endDate)
    .then((response: any) => {
      setRoomId(response.data);
    })
    .catch((e: Error) => {
      console.log(e);
    })
  }

  const retrieveRoomPrice = () => {
    services.getRoomPrice(selectedRoomType, startDate, endDate)
    .then((response: any) => {
      setRoomPrice(response.data);
      setResult('Намерена е свободна стая. Дължима сума: ' + roomPrice + ' лв.');
    })
    .catch((e: Error) => {
      console.log(e);
    })
  }

  const createReservation = () => {
    services.createReservation(email, name, phoneNumber, startDate, endDate, roomPrice, roomId)
    .then((response: any) => {
      console.log(response.code);
    })
    .catch((e: Error) => {
      console.log(e);
    })
  }

  return (
    <div>
      <div className="title">
        <h2>Резервация</h2>
        <div className="underline" />
      </div>

      <div className="roomsSection">
        <div className="doubleRoom">
          <img src={doubleRoomImage} className="roomImages" />
        </div>
        <div className="tripleRoom">
          <img src={tripleRoomImage} className="roomImages" />
        </div>
        <div className="apartment">
          <img src={apartmentImage} className="roomImages" />
        </div>
      </div>

      <div className="reservationPanel">
        <input type="date" className="btn-hour" 
          onChange={(e) => setStartDate(e.target.value)}
          defaultValue={startDate}/>
        <input type="date" className="btn-hour" 
          onChange={(e) => setEndDate(e.target.value)}
          defaultValue={endDate}/>

        <div className="dropdown">
            <button type="button" className="btn-hour dropdown-toggle" data-bs-toggle="dropdown">
                Тип стая
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" onClick={() => setSelectedRoomType(1)}>Двойна стая</a></li>
                <li><a className="dropdown-item" onClick={() => setSelectedRoomType(2)}>Тройна стая</a></li>
                <li><a className="dropdown-item" onClick={() => setSelectedRoomType(3)}>Апартамент</a></li>
            </ul>
        </div>

        <button className="btn-search" onClick={handleOnSearchClicked}>Провери наличност</button>
      </div>

      <div className="result">{result}</div>

      {isReservationSectionVisible && <div>
        <div className="result">За да направите своята резервация моля попълнете следните полета:</div>  
        <div className="reservationPanel">
          <input type="text" placeholder='Име и фамилия' className="personalInfo" onChange={(e) => setName(e.target.value)}/>
          <input type="text" placeholder='Телефонен номер' className="personalInfo" onChange={(e) => setPhoneNumber(e.target.value)}/>
          <input type="text" placeholder='Email' className="personalInfo" onChange={(e) => setEmail(e.target.value)}/>
          <button className="btn-search" onClick={handleOnReserveClicked}>Резервация</button>
        </div>  
      </div>}

      {isReservationSuccessful && <div>
        <div className="reservationResult">Резервацията беше направена успешно!</div>
        <div className="reservationResult">Автоматично Ви бе създаден профил с който можете да достъпвате всички менюта.</div>
        <div className="reservationResult"> Проверете Email-а си, където Ви бяха изпратени потребителско име и парола!</div>
      </div>}
    </div>
  );
};

export default Reservation;
