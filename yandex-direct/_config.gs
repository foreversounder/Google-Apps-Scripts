function config() {
    const CONFIG = {
        customDaysInDateRange: 180,
        // Указываем количество дней для выборки
        // Если хотим использовать данные о конверсиях или доходности, то в качестве значения следует указывать число большее чем окно конверсии. 

        customDateRangeShift: 0,
        // Указываем на сколько дней от сегодняшнего мы сдвигаем выборку. Нужно для того чтобы не брать те дни когда запаздывает статистика.
        // Если хотим использовать данные о конверсиях или доходности, то в качестве значения следует указывать число равное дням в окне конверсии. 

        yandexToken: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
        // Для получения токена вручную выполните следующие действия:
        // Войдите на Яндекс под своим логином.
        // Перейдите по ссылке https://oauth.yandex.ru/authorize?response_type=token&client_id=ИДЕНТИФИКАТОР_ПРИЛОЖЕНИЯ
        // На открывшейся странице нажмите кнопку Разрешить.
    };
    return CONFIG;
}
