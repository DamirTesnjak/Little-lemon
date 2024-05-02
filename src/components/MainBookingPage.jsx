import React, { useState } from 'react';

function MainBookingPage(props) {
    const { availableTimes, dispatch, submitForm } = props;

    const [formValues, setFormValues] = useState({
        date: '',
        time: '',
        guests: 0,
        occation: '',
    })

    function handleChange(date) {
        setFormValues({
            ...formValues,
            date,
        });
        dispatch(date);
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        submitForm(e);
        };

    return (
        <div className='booking-form'>
            <h2 className="booking-subtitle">Table reservation</h2>
            <form style={{
                display: 'grid',
                maxWidth: '200px',
                gap: '20px',
                }}
                onSubmit={handleSumbit}
            >
                <label for="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={formValues.date}
                    onChange={(e) => handleChange(e.target.value)}
                    required
                ></input>
                <label for="res-time">Choose time</label>
                <select
                    id="res-time "
                    value={formValues.time}
                    onChange={(e) => setFormValues({
                        ...formValues,
                        time: e.target.value
                    })}
                    required
                >
                    {availableTimes.availableTimes.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
                <label for="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={formValues.guests}
                    onChange={(e) => setFormValues({
                        ...formValues,
                        guests: e.target.value
                    })}
                    required
                ></input>
                <label for="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={formValues.occation}
                    onChange={(e) => setFormValues({
                        ...formValues,
                        occation: e.target.value
                    })}
                    required
                >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <input className="button" type="submit" value="Make Your reservation"></input>
            </form>
        </div>
    )
}

export default MainBookingPage;