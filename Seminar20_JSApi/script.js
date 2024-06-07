/* Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения,
 максимальное количество участников и текущее количество записанных участников.
1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.
2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.
3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.
4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".
5. Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.
6. Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.
7. При разработке используйте Bootstrap для стилизации элементов. */

const initialJson = [
  {
    name: "Йога",
    time: "09:00 - 10:00",
    maxParticipants: 3,
    participants: ["Иван", "Мария", "Алексей"],
  },
  {
    name: "Кроссфит",
    time: "11:00 - 12:00",
    maxParticipants: 15,
    participants: ["Екатерина", "Дмитрий"],
  },
  {
    name: "Тяжелая атлетика",
    time: "14:00 - 15:00",
    maxParticipants: 10,
    participants: [],
  },
];

const lskey = "classes";

if (!localStorage.getItem(lskey)) {
  localStorage.setItem(lskey, JSON.stringify(initialJson));
}

const classes = JSON.parse(localStorage.getItem(lskey));
const container = document.getElementById("classes-container");
container.innerHTML = classes.map(createClassesHTML).join("");

function createClassesHTML(classItem, index) {
  return `
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">${classItem.name}</h5>
          <p class="card-text">Время: ${classItem.time}</p>
          <p class="card-text">Максимальное количество участников: ${classItem.maxParticipants}</p>
          <p class="card-text">Записаны: ${classItem.participants.length}/${classItem.maxParticipants}</p>
          <div class="d-flex justify-content-between align-items-center flex-wrap">
              <button class="btn sign-up-button btn-primary" data-index="${index}">Записаться</button>
              <div class="sign-up d-flex align-items-center mt-2" style="opacity: 0;">
                <input type="text" placeholder="Введите ФИО" class="form-control mr-2">
                <button class="btn submit-button btn-primary"> Подтвердить запись</button>
              </div>
              <div class="d-flex flex-column align-items-end">
                  ${classItem.participants
                    .map(
                      (participant) => `
                  <div class="d-flex align-items-center mb-2">
                  <span class="participant mr-2">${participant}</span>
                  <button class="btn cancel-button btn-warning btn-sm" data-index="${index}" data-participant="${participant}">Отменить запись</button>
                  </div>
              `
                    )
                    .join("")}
              </div>
          </div>
       </div>
      </div>           
        `;
}

const cancelButtons = document.querySelectorAll('.cancel-button');
cancelButtons.forEach((button) => {
  button.addEventListener('click', () => {
      const classIndex = button.dataset.index;
      const participantName = button.dataset.participant;
      classes[classIndex].participants = classes[classIndex].participants.filter(
        (participant) => participant !== participantName
      );
      localStorage.setItem(lskey, JSON.stringify(classes));
      container.innerHTML = classes.map(createClassesHTML).join('');
  });
});

const signUpButtons = document.querySelectorAll('.sign-up-button');
signUpButtons.forEach((button) => {
  button.addEventListener('click', () => {
      const classIndex = button.dataset.index;
      if (classes[classIndex].participants.length < classes[classIndex].maxParticipants){
        button.parentElement.querySelector('.sign-up').style.opacity = '1';
        button.parentElement.querySelector('.sign-up').style.display = 'flex';
        const submitButtons = document.querySelectorAll('.submit-button');
        submitButtons.forEach((button) => {
          button.addEventListener('click', () => {
            const signUpDiv = button.closest('.sign-up');
            const participantName = signUpDiv.querySelector('input').value.trim();
            classes[classIndex].participants.push(participantName);
            localStorage.setItem(lskey, JSON.stringify(classes));
            container.innerHTML = classes.map(createClassesHTML).join('');
            signUpDiv.style.opacity = '0';
            signUpDiv.style.display = 'none';
          });
        });
      }
      else {
        button.disabled = true;
      }
  });
});

