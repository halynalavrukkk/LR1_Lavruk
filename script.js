// ==========================================
// НАЛАШТУВАННЯ ДАНИХ (Змініть на власні)
// ==========================================
const STUDENT_NAME = "ОЛЕКСАНДР";    // Ваше ім'я
const STUDENT_SURNAME = "КОВАЛЕНКО"; // Ваше прізвище

// ==========================================
// ЗАВДАННЯ 1: Список (ul) з літерами імені
// ==========================================
const nameListContainer = document.getElementById('name-letters-list');

if (nameListContainer) {
    // Перебираємо ім'я по літерах за допомогою циклу for...of
    for (const letter of STUDENT_NAME) {
        const li = document.createElement('li');
        li.textContent = letter;

        // При наведенні миші показуємо alert з цією літерою
        li.addEventListener('mouseenter', () => {
            alert(`Літера вашого імені: ${letter}`);
        });

        nameListContainer.appendChild(li);
    }
}

// ==========================================
// ЗАВДАННЯ 2: Запит Прізвища та Імені до натискання "Відміна"
// ==========================================
const startPromptBtn = document.getElementById('start-prompt-btn');
const studentsList = document.getElementById('students-list');

if (startPromptBtn && studentsList) {
    startPromptBtn.addEventListener('click', () => {
        while (true) {
            const input = prompt("Введіть прізвище та ім'я студента:\n(Натисніть 'Скасувати' / 'Cancel' для завершення)");

            // Якщо користувач натиснув "Скасувати" (prompt повертає null) — виходимо з циклу
            if (input === null) {
                break;
            }

            // Перевірка на порожній рядок
            if (input.trim() !== "") {
                const li = document.createElement('li');
                li.textContent = input.trim();
                
                // Відображаємо у вікні браузера одразу після кожного введення
                studentsList.appendChild(li);
            }
        }
    });
}

// ==========================================
// ЗАВДАННЯ 3: Кнопка «Показати блоки» та контейнер id="letters"
// ==========================================
const toggleBtn = document.getElementById('toggle-blocks-btn');
const lettersContainer = document.getElementById('letters');

if (toggleBtn && lettersContainer) {
    toggleBtn.addEventListener('click', () => {
        // Перевіряємо, чи є вже блоки у контейнері
        if (lettersContainer.children.length > 0) {
            // При повторному натисканні контейнер очищається
            lettersContainer.innerHTML = '';
        } else {
            // Для кожної літери прізвища створюємо блок (div)
            for (const letter of STUDENT_SURNAME) {
                const box = document.createElement('div');
                box.className = 'letter-box';
                box.textContent = letter;

                // При наведенні на блок у alert показуємо «Це літера [ ]»
                box.addEventListener('mouseenter', () => {
                    alert(`Це літера [ ${letter} ]`);
                });

                lettersContainer.appendChild(box);
            }
        }
    });
}