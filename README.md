# Git - быстрый старт
Краткое руководство по внедрению Git. Автор: Чернов Алексей

## Используемые технологии
_Для работы требуется установка [ATOM](https://atom.io/), [Git](https://git-scm.com/)_

## Установка командной строки в ATOM
- **File -> Settings -> Install**, в поиковое поле вводим название плагина _**platformio-ide-terminal**_ и устанавливаем его.
- **amp install language-pug** — добавление синтексиса **pug**.

## Инициализация Git
- **git init** — выполняется в папке проекта.

## Добавление файлов — локальный репозиторий
- **git add file.name** — добавление файла.
- **git add dir/** — добавление папки и файлов внутри неё.
- **git add .** — добавление всех папок и всех файлов, которые находятся внутри проекта.
- **git add \*.html** — добавление только html файлов.
- **git add !css/style.css** — исключение файла **style.css**.
- **git commit -m "comment add index.html"** — «переезд». Файлы ожидающие коммита отправляются на локальный сервер.

## Игнорирование файлов — локальный репозиторий
- **.gitignore** — создаем файл внутрь которого помещаем файлы и папки, которые следует игнорировать.

## Проверка статуса файлов — git status
- **On branch name** — имя ветки.
- **No commits yet** — пока нет коммитов.
- **Changes to be committed:** — перечень файлов ожидающих изменений статуса, ожидающих коммита.
- **Untracked files:** — перечень файлов исключенных из стадии ожидающия.
- **Changes not staged for commit** — в некоторые файлы были внесены изменения, но эти файлы не были добавлены к ожиданию. 

## Удаление файлов из статуса ожидания
- **git rm --cached file.name** — удаление файла или папки из статуса ожидания.

## Просмотр, отмена, удаление коммита
- **git log** — **посмотреть** список произведеных коммитов изменений.
- **git log --oneline** — **посмотреть** список изменений «одной» строкой.
- **git checkout 4f4f288** — **просмотр** изменений на момент **4f4f288** коммита. **4f4f288** — id коммита.
- **git revert 4f4f288** — **отменяет** все действия произведенные в определенном коммите, именно **отменит**,а не удаляет!
- **git reset 4f4f288** — **удалит** все коммиты, которые предшествовали коммиту с id **4f4f288**, но действия удаленных коммитов удалены не будут.
- **git reset 4f4f288 --hard** — **удалит** все коммиты, которые предшествовали коммиту с id **4f4f288** и вернет файлы на состояние соответствующие данному коммиту.

## Ветки
- **git branch -a** — **посмотреть** список всех веток.
- **git branch branch.name** — создание новой ветки.
- **git checkout branch.name** — переход на интересующую ветку.
- **git checkout master** — **отменить**, вернутся к просмотру основной ветки проекта. **master** — основная ветка.
- **git checkout -d branch.name** — создание с последующим переходом на созданую ветку.
- **git branch -D branch.name** — удаление ветки.

## Ветки — слияние
- **git  checkout master** — переход на основную ветку.

# GitHub
- **git remote add origin https://github.com/user.name/project.name.git** — подключение к удаленому репозиторию.
- **git push -u origin master** — добавление ветки **master** в репозиторий.
- **git clone https://github.com/user.name/project.name.git** — скачивание проекта в локальный репозиторий. 
### _!ВАЖНО В склонированной папке не нужно прописовать команду git init, она применена по умолчанию._ 
- **git pull** — скачивание всех недастающих файлов проекта. 
