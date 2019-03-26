const chrono = require('chrono-node');
const moment = require('moment');

let currentLocale = 'en';

module.exports.Initialize = (iridium) => {
    iridium.Settings.GetSettings().then(settings => {
        if(settings && settings.locale) {
            currentLocale = settings.locale;
        }
        iridium.Messenger.Send('Settings-Updated', settings);
    });
    iridium.Messenger.on('Settings-Initialize', () => {
        iridium.Messenger.Send('Settings-Updated', {
            locale: currentLocale
        });
    });
    iridium.Messenger.on('Settings-SetLocale', (arg) => {
        currentLocale = arg.locale;
        let newSettings = {
            locale: currentLocale
        };
        iridium.Settings.SetSettings(newSettings);
        iridium.Messenger.Send('Settings-Updated', newSettings);
    });
    iridium.TaskLists.on(iridium.TaskEvents.TaskCreated, (taskData) => {
        setDueDateBasedOnTaskData(iridium, taskData);
    });
    iridium.TaskLists.on(iridium.TaskEvents.TaskUpdated, (taskData) => {
        setDueDateBasedOnTaskData(iridium, taskData);
    });
}

function setDueDateBasedOnTaskData(iridium, taskData) {
    let chronoLocale = chrono[currentLocale] ? chrono[currentLocale] : chrono.en;
    let parsed = chronoLocale.parse(taskData.title, new Date(), { forwardDate: true });
    if (parsed.length && parsed[0].start) {
        let dateObj = moment(parsed[0].start.date());
        iridium.TaskLists.SetTaskDueDate(taskData.listId, taskData.id, dateObj.format('YYYY-MM-DD'));
    }
}