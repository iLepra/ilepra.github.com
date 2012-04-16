{"history"  : [
  {
    "date" : "15 Апреля 2012, версия 1.0.32",
    "changes" : "<ol><li>Исправлена бага с нерабочими ссылками</li><li>Изменены размеры шрифтов для планшетов</li><li>Всю историю вы можете найти в 'История изменений' в настройках программы</li></ol>"
  },
  {
    "date" : "11 Апреля 2012, версия 1.0.31",
    "changes" : "<ol><li>На 90% решена проблема тормозных комментариев! Уииии!!!111</li><li>Теперь, если в комментарии нет картинок / ссылок, то он будет загружаться практически сразу.<br />Отпала необходимость в фиксированной высоте для комментов в режиме навигации по новым. Теперь комментарии будут всегда развернутыми.<br />Т.к. мы по–прежнему не знаем высоты для комментариев с картинками, то проблема точного позиционирования при переходе к следующему новому все равно остается, но я надеюсь, будет менее критичной (еще и редкой) в сравнении с трудностями при просмотре свернутых комментариев, ожиданием их отрисовки и т.п.<br />Приятным бонусом этого изменения будет уменьшение потребляемой памяти)</li></ol<p class='title'>Итого:</p><ol><li><b>1) Просматривать комментарии должно стать значительно удобнее</b></li><li>2) Переход к следующему новому иногда может сбоить. Выражаться это будет в том что курсор иногда будет останавливаться чуть–чуть до нужного коммента. Повторное нажатие кнопки должно его перекинуть куда надо. Надеюсь и эту проблему я когда–нибудь решу.</li><li>3) На планшетах (которого у меня нет и поэтому мне не проверить) шрифт комментов с картинками и без может отличаться, если это так нужно будет вместе поэкспериментировать с шрифтом.</li></ol>"
  },
  {
    "date" : "11 Апреля 2012, версия 1.0.29",
    "changes" : "<ol><li>Пофискил проблему производительности 27 билда (т.е. теперь должна быть как в 26). При этом опять заработали новая фича кэширования и фича по увеличению картинки до ее оригинального размера или размера экрана/поста.</li><li>Надеюсь, здесь не будет проблем с не загружающимися картинка. Зато повторная загрузка должна стать в разы быстрее. Хотя если у вас быстрый интернет, то разницу вы не сильно заметите, разве только на трафике ;)</li><li>P.S. На всякий пожарный предлагаю удалить папку 'LepraDroid' или 'LepraDroid By R' с SD карты, чтобы избежать наведенных проблем со старыми (возможно кривыми) кэшами. Но это optional скорее всего и так все будет нормально.</li></ol>"
  },
  {
    "date" : "10 Апреля 2012, версия 1.0.27",
    "changes" : "<ol><li>1) В меню добавлен выбор фильтра заглавной (заглавная/заглавная и подсайты/подсайты)</li><li>2) <b>[Тестовая фича]</b> Изображения в постах и комментариях подгоняются под размер экрана/комментария, а не имеют фиксированную ширину как раньше</li><li>3) <b>[Тестовая фича]</b> Изображения в постах и комментариях сохраняются на SD карту т.е. кэшируются и как следствие грузятся ОДИН раз</li><li>4) Новые пропорции шрифтов для планшетов</li><li>5) Убран рейтинг комментариев из инбоксов и меню 'нравится/не нравится' для собственных комментариев</li><li>6) Теперь линки на профиль пользователя программа открывает в себе, а не в браузере</li><li>7) Настройки виджета вынесены на отдельный экран</li></ol><ol><li>Раньше картинки из постов и комментариев не сохранялись на SD карту, туда сохранялись только превьюшки постов. Теперь сохраняется все!, нужно чтобы уменьшить оверхед передачи по сети. </li><li>Кэш технологический, картинки внутри постов/комментов сохраняются в закодированном виде, т.е. открывать как картинки их не надо, для этого я потом сделаю отдельную фичу. </li><li>Кэш внешний, фичи его очищения пока нет, поэтому удалить его можно только через удаление папки 'LepraDroid' c SD (это безопасная операция), потом сделаю отдельный пункт меню, который будет это делать.</li><li><b>В нативном коде подобные фичи даются не просто, поэтому возможны любые проблемы, напишите мне если у вас что–то не работает!</b></li></ol>"
  },
	{
		"date" : "2 Апреля 2012, версия 1.0.26",
		"changes" : "<ol><li>Добавлена настройка 'Пост c комментариями' отключение которой позволяет загружать комментарии только при переходе на них. Если не отмечено, то до перехода пост будет считаться непрочитанным</li><li>Убрал 'R' из названия программы, теперь показывается только на логон скрине и в настройках</li><li>После каждого обновления клиента или логона будет показываться история изменений. Самостоятельно ее можно открыть через меню настроек</li></ol>"
	},
	{
		"date" : "1 Апреля 2012, версия 0.0.25",
		"changes" : "<ol><li>Исправлена опечатка</li></ol>"
	},
	{
		"date" : "30 Марта 2012, версия 0.0.24",
		"changes" : "<ol><li>Добавлена настройка поведения уведомлений о непрочитанных сообщениях. Теперь по умолчанию уведомление генерируется только первый раз и не появляется до прочтения оставшихся сообщений</li><li>Сделано чтобы не раздражать частыми уведомлениями, особенно ночью</li></ol>"
	},
	{
		"date" : "30 Марта 2012, версия 0.0.23",
		"changes" : "<ol><li>Добавлена фича по переходу в профиль автора коммента из диалога, открывающегося по долгому нажатию на коммент</li><li>История изменений вынесена в диалог с настройками. Туда же добавлена версия приложения и информация об авторе, т.е. обо мне ;)</li></ol>"
	},
	{
		"date" : "30 Марта 2012, версия 0.0.22",
		"changes" : "<ol><li>Исправлена бага с вибрацией</li></ol>"
	},
	{
		"date" : "30 Марта 2012, версия 0.0.21",
		"changes" : "<ol><li>Добавлена фишка голосования за автора коммента, работает через диалог, открывающийся по долгому нажатию на коммент</li><li>Виджет теперь генерирует уведомления в notification area при появлении новых непрочитанных сообщений Для меня это очень важная фича, позволяющая все время не лазить в клиент</li><li>Появились настройки</li><li>Можно отключать картинки</li><li>Можно выбирать шрифт Жду отзывов от владельцу планшетов, которые хотели эту фичу</li></ol>"
	},
	{
		"date" : "29 Марта 2012, версия 0.0.19",
		"changes" : "<ol><li>Добавил виджет непрочитанных сообщений! Т.к. сейчас нет настроек, то выводим одновременно оба счетчика, и для моих вещей и для инбокса, разделяя их символом '|'.</li></ol>"
	},
	{
		"date" : "26 Марта 2012, версия 0.0.18",
		"changes" : "<ol><li>До этой версии не использовалась возможность серверов (лепры) архивировать ответы перед отправкой их клиенту. Теперь используется!</li><li>Замеры показали выигрыш в скорости загрузки тяжелых постов до одного порядка!!! Объем передаваемого трафика уменьшится на столько же. </li><li>Это обновление должно особенно понравиться людям с медленным интернетом.</li></ol>"
	},
	{
		"date" : "25 Марта 2012, версия 0.0.17",
		"changes" : "<ol><li>1) Добавил древовидное отображение комментариев до 10'ого уровня (на лепре до 8'ого)! Плюс для более удобной ориентации уровень выделяется цветом, постоянным для этого уровня. Все уровни начиная с 10 и больше выделяются одинаковым цветом.</li><li>2) Для выделения новых комментариев больше НЕ используется красный треугольник, теперь новые комментарии имеют другой цвет фона, в отличии от прочитанных комментариев у новых цвет фона теперь СЕРЫЙ! </li><li>3) Имя пользователя подсвечивается светло-голубым цветом, если вы являетесь автором поста, то цвет будет как у автора поста - красный.</li></ol>"
	},
	{
		"date" : "22 Марта 2012, версия 0.0.15",
		"changes" : "<ol><li>1) Теперь загружаются все подлепры, а не только первая страница. Работает так же как и в постах, т.е. подгружается при промотке.</li><li>2) При нажатии на ссылку, ведущую к посту на лепре, внутри постов и комментариев, пост будет открыт не в браузере, а в программе. Спасибо лепроюзеру jorik, который вновь порадовал нас хорошей фичей!</li><li>3) Теперь в профиле пользователя рядом с его именем показывается и его никнейм.</li></ol>"
	},
	{
		"date" : "18 Марта 2012, версия 0.0.14",
		"changes" : "<ol><li>1) Подлепры из Навигационной штуки выводятся вначале списка подлепр. Спасибо лепроюзеру <a href='http://leprosorium.ru/users/jorik'><b>Jorik</b></a>.</li><li>2) Теперь загружаются все посты, а не только первая страница. Работает через скроллинг, т.е. при скроллинге до конца страницы догружается следующая.</li><li>3) Исправлена ошибка, в результате которой не показывались подлепры в которых нет голосования.</li><li>4) Исправлена ошибка с показом некоторых тэгов (тире, многоточие, ...) в комментариях и постах.</li></ol>"
	},
	{
		"date" : "10 Марта 2012, версия 0.0.12",
		"changes" : "<ol><li>1) К корпорации добрых дел присоединился мега чел <a href='http://leprosorium.ru/users/jorik'><b>Jorik</b></a> (Скажем ему за это огроменное СПАСИБО! ) и в свое свободное время, почти без моей помощи, добавил для всех нас фичу голосования за карму! Делается через плюсик и минусик в профиле пользователя.</li><li>2) Добавил режим навигации по новым комментариям. Включается/отключается этот режим в меню.  С ним не все так гладко как хотелось бы и вот почему. Ввиду специфики работы webview (наперед не известна его высота, т.к. он строится только в момент показа), и как следствие невозможности точно спозиционироваться на нужно комментарии (или нужно очень много памяти, чтобы отстроить все вьюшки с картинками и посчитать их размер), поэтому все комментарии в этом режиме имею ФИКСИРОВАННУЮ высоту! По двойному нажатию комментарий разворачивается, при отключении режима навигации все комментарии разворачиваются и становится как было раньше.</li></ol><div>Еще один нюанс, т.к. комментарии загружаются не все сразу (было бы очень долго) а по мере их разбора, то перемещение может работать не моментально (т.к. еще не все загрузилось, например, в больших постах). В таких случаях будет показываться тост о том что ищутся новые комментарии и если они таки найдутся, то будет осуществлен переход или показано сообщение о том что новых комментариев нет. Скорее всего это не конечный алгоритм работы, но пока это наиболее юзабельный из тех что удалось придумать.</div>"
	},
	{
		"date" : "3 Марта 2012, версия 0.0.10",
		"changes" : "<ol><li>1) Исправлено падение на ICS при открытии комментариев и установленной галочке Force GPU rendering в Developer Options.</li><li>2) Исправлено поведение при нажатии enter'а на логон скрине. Теперь в контролах аля Имя Пользователя по ентеру переходим на следующий контрол, а не на новую строчку как раньше.</li></ol>"
	},
	{
		"date" : "2 Марта 2012, версия 0.0.9",
		"changes" : "<p class='title'>В этой версии</p><ol><li>1) Добавил индикатор для новых комментариев! Теперь у новых комментариев в верхнем левом углу рисуется ненавязчивый красный треугольник.</li><li>2) В комментариях автора поста его имя выделяется.</li></ol><div>Теперь можно понять какой комментарий новый. Эгегей!!! ) Почему именно треугольник, да еще и красный?..Изначально было две рабочие версии: менять цвет фона и добавлять рамку. Первая оказалась не очень т.к. квадраты не белого фона визуально разрушали простой минимализм и все сразу становилось как–то сложно и грустно. Рамка сначала показалась отличным решением (можете найти ее закоменченную в коде), но если большинство комментариев новых, то из–за сплошных рамок становилось плохо. Еще были идеи писать текст, ставить справа/слева подписи какую–нибудь картинку…Вообщем пока я остановился на треугольничке, он ест минимально места, т.к. укладывается ровно между двумя квадратными ариями, он заметен и не раздражает если их много. Вообщем оставил пока так, т.к. это мне на данный момент нравится больше прочего т.к. хорошо укладывается в общий стиль простого минимализма. Ну и имя автора поста теперь тоже выделяется красным, чтобы сразу можно было отличать его комментарии от комментариев остальных.</div>"
	},
	{
		"date" : "1 Марта 2012, версия 0.0.7",
		"changes" : "<p class='title'>В этой версии</p><ol><li>1) Добавил возможность голосовать за пост! Работает через плюсик и минусик внутри поста.</li><li>2) Теперь при смене IP должно выбрасывать на logon screen</li></ol>"
	},
	{
		"date" : "29 Февраля 2012, версия 0.0.6",
		"changes" : "<div>В этой версии добавил возможность отвечать на комментарии. Работает по долгому нажатию на коммент на который нужно ответить. Потом будет открывать диалог со списком доступных действий (аля голосовать, автор,..) но т.к. пока ничего больше нет, то сразу открывается диалог для ввода комментария.</div>"
	},
	{
		"date"    : "23 Февраля 2012, версия 0.0.4",
		"changes" : "<p class='title'>В этой версии:</p><ol><li>1) Добавил возможность комментировать пост (БЕЗ ответов на уже существующие комментарии, только новый коммент!). Делается через меню на вкладке комментарии. Напоминаю, что сейчас нет сообщений об ошибках, поэтому понять что комментарий не добавился можно только косвенно. Сейчас, если все прошло хорошо, то появляется toast о том, что комент добавился (если он появился значит коммент точно добавился), в список комментариев последним добавляется ваш коммент, и курсор автоматом на него перемещается. Спасибо Lam13err за тестирование.</li><li>2) Поменял расположение табов на более удобное</li><li>3) Исправил ошибку с квадратиками в посте вместо тире и черными треугольниками (ууухх, если бы не помощь от jitkit, то так быстро точно бы не исправилось)</li><li>4) Добавил новые иконки, в том числе более качественную иконку приложения. Спасибо karamba за то, что их нарисовал.</li><li>5) Исправил редкое падение при переходах по табам</li></ol><div>Это первая версия с активной фичей, дальше в планах: ответ на комментарий и госование за пост</div>"
	},
	{
		"date"    : "14 Февраля 2012, версия 0.0.3",
		"changes" : "<p class='title'>Изменено:</p><div>Думал я о том как использовать заголовок программы и понял, что сейчас он попросту отъедает место и не нужен.<br />Поэтому, в этой версии убрал LepraDroid by R со всех экранов кроме логон скрина (оттуда потом скорее всего тоже уберу). Тем самым добавилось полезного пространства (а это крайне важно для мобильных приложений).<br />А внутри подлепры наоборот добавил такой же заголовок как на плавной странице с именем этой подлепры, теперь ясно в какой подлепре находишься, и интерфейс стал еще проще и однородней.</div>"
	}
]}
