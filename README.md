# Git - быстрый старт
Краткое руководство по внедрению Git. Автор: Чернов Алексей

## Используемые технологии
_Для работы требуется установка [ATOM](https://atom.io/), [Git](https://git-scm.com/)_

## Установка командной строки в ATOM
_**File -> Settings -> Install**_, в поиковое поле вводим название плагина _**platformio-ide-terminal**_ и устанавливаем его.

## Инициализация Git
**git init** — выполняется в папке проекта.

## Добавление файлов — локальный репозиторий
1. **git add file.name** — добавление файла.
1. **git add dir/** — добавление папки и файлов внутри неё.
1. **git add .** — добавление всех папок и всех файлов, которые находятся внутри проекта.
1. **git add \*.html** — добавление только html файлов.
1. **git add !css/style.css** — исключение файла **style.css**.

## Игнорирование файлов — локальный репозиторий
**.gitignore** — создаем файл внутрь которого помещаем файлы и папки, которые следует игнорировать.

## Проверка статуса файлов — git status
1. **On branch name** — имя ветки.
1. **No commits yet** — пока нет коммитов.
1. **Changes to be committed:** — перечень файлов ожидающих изменений статуса, ожидающих коммита.
1. **Untracked files:** — перечень файлов исключенных из стадии ожидающия.
1. **Changes not staged for commit** — в некоторые файлы были внесены изменения, но эти файлы не были добавлены к ожиданию. 

## Удаление файлов из статуса ожидания
**git rm --cached file.name** — удаление файла или папки из статуса ожидания.

## Отправка файлав на локальный сервер
**git commit -m "comment add index.html"** — «переезд». Файлы ожидающие коммита отправляются на локальный сервер.

## Просмотр, отмена, удаление коммита
1. **git log** — **посмотреть** список произведеных коммитов изменений.
1. **git log --oneline** — **посмотреть** список изменений «одной» строкой.
1. **git checkout 4f4f288** — **просмотр** изменений на момент **4f4f288** коммита. **4f4f288** — id коммита.
1. **git branch -a** — **посмотреть** список всех веток.
1. **git checkout master** — **отменить**, вернутся к просмотру основной ветки проекта. **master** — основная ветка.
1. **git revert 4f4f288** — **отменяет** все действия произведенные в определенном коммите, именно **отменит**,а не удаляет!
1. **git reset 4f4f288** — **удалит** все коммиты, которые предшествовали коммиту с id **4f4f288**, но действия удаленных коммитов удалены не будут.
1. **git reset 4f4f288 --hard** — **удалит** все коммиты, которые предшествовали коммиту с id **4f4f288** и вернет файлы на состояние соответствующие данному коммиту.

## Ветки
**git  branch branch.name** — создание новой ветки.
**git  checkout branch.name** — переход на интересующую ветку.
**git  checkout -d branch.name** — создание с последующим переходом на созданую ветку.

## Ветки — слияние
1. **git  checkout master** — переход на основную ветку.

# GitHub
**git remote add origin https://github.com/user.name/project.name.git** — подключение к удаленому репозиторию.
**git push -u origin master** — добавление ветки **master** в репозиторий.
