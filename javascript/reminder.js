const reminders = [];

function setReminder(reminderText, dueDate) {
  const reminder = {
    text: reminderText,
    dueDate: dueDate
  };
  reminders.push(reminder);
}

function checkReminders() {
  const now = new Date();
  for (let i = 0; i < reminders.length; i++) {
    if (now >= reminders[i].dueDate) {
      console.log(reminders[i].text);
    }
  }
}

setReminder("Take out the trash", new Date("January 25, 2022 12:00:00"));
setReminder("Buy milk", new Date("January 26, 2022 18:00:00"));

setInterval(checkReminders, 1000);