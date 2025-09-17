# Отрисовка данных с сервера в React

## Срок сдачи работ

Последний коммит и пул реквест должен быть оформлен до ???

## Цель:

Вам дана базовая структура React приложения. Ваша задача создать компоненты, которые будут получать данные с API `https://kitek.ktkv.dev/songs.json` и отображать их в виде списка треков.

![logo](.repo/Screenshot%202025-09-11%20at%2008.57.23.png?v=1)

## Теория

### Структура данных для одного трека

```html
<li class="track-item">
    <div class="track-number">1</div>
    <div class="track-main">
        <img
            src="https://i.scdn.co/image/ab67616d000048516f51139efce47d2e01da8052"
            alt="плохохорошо"
            class="album-art"
            loading="lazy"
        />
        <div class="track-info">
            <div class="track-name">плохохорошо</div>
            <div class="track-artists">iskrit, ioneweb</div>
            <div class="track-album">плохохорошо</div>
        </div>
    </div>
    <div class="track-meta">
        <div class="duration">2:59</div>
        <div class="popularity">♪ 30</div>
    </div>
</li>
```

_Обратите внимание, что это конечное DOM дерево. Это должно быть сделано при помощи компонентов React_

### 1: Создание хука для получения данных

```jsx
const [tracks, setTracks] = useState([]);

useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setTracks(data);
        } catch (err) {
            console.error(err.message);
        }        
    }

    fetchData();
}, []);
```

### 2. Передача props

```jsx
// Родительский компонент
function App() {
    const userName = "Иван Петров";
    const userAge = 25;
    
    return (
        <div>
            <UserCard name={userName} age={userAge} />
        </div>
    );
}

// Дочерний компонент
function UserCard(props) {
    return (
        <div className="user-card">
            <h2>{props.name}</h2>
            <p>Возраст: {props.age}</p>
        </div>
    );
}
```

#### Деструктуризация props:

```jsx
// Более чистый способ получения props
function UserCard({ name, age, avatar }) {
    return (
        <div className="user-card">
            <img src={avatar} alt={name} />
            <h2>{name}</h2>
            <p>Возраст: {age}</p>
        </div>
    );
}
```

### 3. Рендер коллекций 

```jsx
// Передача объекта
function App() {
    const user = {
        name: "Анна Смирнова",
        age: 28,
        email: "anna@example.com",
        skills: ["React", "JavaScript", "CSS"]
    };
    
    return <UserProfile user={user} />;
}

function UserProfile({ user }) {
    return (
        <div className="profile">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <div className="skills">
                {user.skills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                ))}
            </div>
        </div>
    );
}
```

## Структура проекта

```
src/
├── components/
│   ├── Название_компонента.jsx
│   └── Стиль_компонента.css
├── App.jsx
└── main.jsx
```

## Как сдавать

1. Создайте форк репозитория в организации `41ISP` с названием `mobdev-lab8-вашафамилия`
2. Используя ветку `wip` сделайте задание
3. Убедитесь, что приложение запускается командой `npm run dev`
4. Зафиксируйте изменения в вашем репозитории
5. Когда приложение будет готово - создайте пул реквест из ветки `wip` (вашей) на ветку `main` (тоже вашу) и укажите меня ([ktkv419](https://github.com/ktkv419)) как reviewer

**Не мержите сами коммит**, это сделаю я после проверки задания
