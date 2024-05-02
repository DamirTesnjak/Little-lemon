import MainBookingPage from './MainBookingPage';

function BookingPage(props) {
  const { availableTimes, dispatch, submitForm } = props;
  return (
    <div className="BookingPage">
      <MainBookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
    </div>
  );
}

export default BookingPage;