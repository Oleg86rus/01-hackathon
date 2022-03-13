import { Module } from '../../core/module';

export class TimerModule extends Module {
    constructor(type, text) {
        super(type, text);
        this.totalTime = 0;
    }

    toHTML() {
        return super.toHTML();
    }
    trigger() {
        return new Promise(() => {
            const menuTimer = document.querySelector("[data-type = 'timer']");
            menuTimer.addEventListener('click', () => {
                // Запуск инпут
                this.timeInput();
            });
        });
    }

    timeInput() {
        console.log('123123');
        let isTimeInputDisplays = document.querySelector('#timeCount');
        if (isTimeInputDisplays === null) {
            // Label
            const timeCount = document.createElement('div');
            timeCount.id = 'timeCount';
            document.body.append(timeCount);

            const title = document.createElement('h1');
            title.textContent = 'Отсчёт времени';
            timeCount.append(title);

            // Дни
            const daysSection = document.createElement('div');
            timeCount.append(daysSection);

            const labelDays = document.createElement('label');
            labelDays.textContent = 'Количество дней';
            daysSection.append(labelDays);

            const days = document.createElement('input');
            days.id = 'days';
            days.type = 'number';
            days.value = '0';
            days.min = '0';

            // Попытка разработать валидацию на input
            // days.pattern = '^[1-9]+[0-9]*$';
            // days.oninput = "validity.valid||(value='')";
            // days.onpaste = 'return false';
            // days.ondrop = 'return false';
            // days.autocomplete = 'off';
            daysSection.append(days);

            // Часы
            const hoursSection = document.createElement('div');
            timeCount.append(hoursSection);

            const labelHours = document.createElement('label');
            labelHours.textContent = 'Количество часов';
            hoursSection.append(labelHours);

            const hours = document.createElement('input');
            hours.id = 'hours';
            hours.type = 'number';
            hours.value = '0';
            hours.min = '0';
            hoursSection.append(hours);

            // Минуты
            const minutesSection = document.createElement('div');
            timeCount.append(minutesSection);

            const labelMinutes = document.createElement('label');
            labelMinutes.textContent = 'Количество минут';
            minutesSection.append(labelMinutes);

            const minutes = document.createElement('input');
            minutes.id = 'minutes';
            minutes.type = 'number';
            minutes.value = '0';
            minutes.min = '0';
            minutesSection.append(minutes);

            // Секунды
            const secondsSection = document.createElement('div');
            timeCount.append(secondsSection);

            const labelSeconds = document.createElement('label');
            labelSeconds.textContent = 'Количество секунд';
            secondsSection.append(labelSeconds);

            const seconds = document.createElement('input');
            seconds.id = 'seconds';
            seconds.type = 'number';
            seconds.value = '0';
            seconds.min = '0';
            secondsSection.append(seconds);

            // Запуск таймера
            const startButtonSection = document.createElement('div');
            timeCount.append(startButtonSection);

            const startButton = document.createElement('button');
            startButton.id = 'startButton';
            startButton.textContent = 'Начать отсчёт';
            startButtonSection.append(startButton);

            // Подсчет секунд
            const submitStart = document.querySelector('#startButton');
            submitStart.addEventListener('click', () => {
                let d = parseInt(document.querySelector('#days').value, 0);
                let h = parseInt(document.querySelector('#hours').value, 0);
                let m = parseInt(document.querySelector('#minutes').value, 0);
                let s = parseInt(document.querySelector('#seconds').value, 0);
                this.totalTime = d * 86400 + h * 3600 + m * 60 + s;
                if (this.totalTime <= 0) {
                    alert(
                        'Введите корректные данные. Количество должно быть больше 0'
                    );
                } else {
                    console.log('totalTime', this.totalTime);
                }
                let filledTimeInput = document.querySelector('#timeCount');
                filledTimeInput.remove();
                this.startTimer();
            });
        } else {
            alert(
                'Таймер отсчёта уже был запущен и текущий будет удален. Перезапустите таймер отсчёта снова.'
            );
            isTimeInputDisplays.remove();
        }
    }

    startTimer() {
        console.log('Total time', this.totalTime);

        // Создание блока времени отсчета
        const timeCount = document.createElement('div');
        timeCount.textContent = `До завершения таймера осталось ${this.totalTime} сек`;
        document.body.append(timeCount);

        // Таймер отсчета используя декремент (--) с шагом в 1000 мс
        setInterval(() => {
            timeCount.textContent = `До завершения таймера осталось ${--this
                .totalTime} сек`;
        }, 1000);

        // Удаление таймера
        setTimeout(() => {
            document.body.removeChild(timeCount);
        }, this.totalTime * 1000);
    }
}
