# Git - быстрый старт
Краткое руководство по внедрению Git.  
_Для работы требуется установка [ATOM](https://atom.io/), [Git](https://git-scm.com/)_

## Установка командной строки в ATOM
- **File -> Settings -> Install**, в поиковое поле вводим название плагина _**platformio-ide-terminal**_ и устанавливаем его.
- Если запуск пакета из командной строки отдает ошибку **CategoryInfo : Ошибка безопасности: (:) [], PSSecurityException** и не выполняет его. Запускаем в Windows PowerShell с правами администрации и вводим команду **Set-ExecutionPolicy RemoteSigned**. На вопрос о предоставлении прав следует ответитть — **Да для всех**. 
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
- **git mеrge new.branch.name** — объединение ветки new.branch.name с веткой в которой мы сейчас находимся. 
- **git branch -M new.branch.name** — переменует текущую ветку в new.branch.name. 

## Ветки — слияние
- **git  checkout master** — переход на основную ветку.

## Предупреждения
- **in the working copy of 'path/to/fail', LF will be replaced by CRLF the next time Git touches it** — CR - это аббревиатура для "carriage return" (возврат каретки) - управляющий символ CR возвращал печатающую головку ("carriage") к нулевой колонке без движения бумаги. LF - это аббревиатура для "linefeed" (подача бумаги) - управляющий символ LF сдвигал бумагу на одну строчку без движения каретки. Поэтому, если вы хотели вернуть головку к нулевой колонке (чтобы быть готовым печатать на новой строчке) и сдвинуть бумагу (чтобы печатать на чистом месте), то вам нужны были и CR и LF. CP/M, MS-DOS и Win32 используют CR+LF как разделитель строк. В Unix системах, в качестве разделителя строк используется простой простой LF.
- **git config --global core.autocrlf false**

# GitHub
- **git remote add origin https://github.com/user.name/project.name.git** — подключение к удаленому репозиторию, загружаем изменения из локальных файлов на  я GitHub.
- **git push -u origin master** — добавление ветки **master** в репозиторий.
- **git clone https://github.com/user.name/project.name.git** — скачивание проекта в локальный репозиторий. 
### _!ВАЖНО В склонированной папке не нужно прописовать команду git init, она применена по умолчанию._ 
- **git pull** — скачивание всех недастающих файлов проекта. 
