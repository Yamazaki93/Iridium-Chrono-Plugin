const chrono = require('chrono-node');
const moment = require('moment');

let iridiumApp;
let currentLocale = 'en';
let removeMatched = false;

module.exports.Initialize = (iridium) => {
    iridiumApp = iridium;
    iridium.Settings.GetSettings().then(settings => {
        if (settings) {
            if (settings.locale) {
                currentLocale = settings.locale;
            }
            if (settings.removeMatched) {
                removeMatched = settings.removeMatched;
            }
        }
        iridium.Messenger.Send('Settings-Updated', settings);
    });
    iridium.Messenger.on('Settings-Initialize', () => {
        iridium.Messenger.Send('Settings-Updated', {
            locale: currentLocale,
            removeMatched: removeMatched
        });
    });
    iridium.Messenger.on('Settings-SetSettings', (arg) => {
        currentLocale = arg.locale;
        removeMatched = arg.removeMatched;
        updateSettings();
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
        if (removeMatched) {
            let newTitle = taskData.title.replace(`${parsed[0].text}`,'');
            newTitle = newTitle.trim();
            iridium.TaskLists.UpdateTaskTitle(taskData.listId, taskData.id, newTitle);
        }
    }
}

function updateSettings() {
    let newSettings = {
        locale: currentLocale,
        removeMatched: removeMatched
    };
    iridiumApp.Settings.SetSettings(newSettings);
    iridiumApp.Messenger.Send('Settings-Updated', newSettings);
}