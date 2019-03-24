const chrono = require('chrono-node');
const moment = require('moment');
module.exports.Initialize = (iridium) => {
    iridium.TaskLists.on(iridium.TaskEvents.TaskCreated, (taskData) => {
        setDueDateBasedOnTaskData(iridium, taskData);
    });
    iridium.TaskLists.on(iridium.TaskEvents.TaskUpdated, (taskData) => {
        setDueDateBasedOnTaskData(iridium, taskData);
    });
}

function setDueDateBasedOnTaskData(iridium, taskData) {
    let parsed = chrono.parse(taskData.title, new Date(), { forwardDate: true });
    if (parsed.length && parsed[0].start) {
        let dateObj = moment(parsed[0].start.date());
        iridium.TaskLists.SetTaskDueDate(taskData.listId, taskData.id, dateObj.format('YYYY-MM-DD'));
    }
}