const chrono = require('chrono-node');
module.exports.Initialize = (iridium) => {
    iridium.TaskLists.on(iridium.TaskEvents.TaskCreated, (taskData) => {
        let parsed = chrono.parse(taskData.title, new Date(), { forwardDate: true });
        iridium.Log.Info(parsed);
    });
}