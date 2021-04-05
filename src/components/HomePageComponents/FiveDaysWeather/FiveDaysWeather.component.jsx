import OneDay from "../OneDay/OneDay.component";

const FiveDaysWeatherComponent = ({ transformIcons, days }) => {
  const iconum = (num) => transformIcons(num);

  return (
    <div className="forecast-container">
      {days
        ? days.DailyForecasts.map((day, indx) => {
            return (
              <OneDay
                dayName={day.Date}
                key={indx}
                dayTemp={day.Temperature.Maximum.Value}
                temUnit={day.Temperature.Maximum.Unit}
                dayIcon={iconum(day.Day.Icon)}
                dayPhrase={day.Day.IconPhrase}
              ></OneDay>
            );
          })
        : null}
    </div>
  );
};

export default FiveDaysWeatherComponent;
