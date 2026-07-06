const prayerSchedule = [
  { date: 1, fajr_adhan_18deg: "03:33 AM", fajr_adhan_15deg: "03:33 AM", fajr_iqamah: "4:20 AM", sunrise: "05:14 AM", dhuhr_adhan: "12:50 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:52 PM", asr_hanafi: "5:58 PM", asr_iqamah: "6:00 PM", maghrib_adhan: "08:25 PM", maghrib_iqamah: "8:15 PM", isha_adhan: "10:07 PM", isha_iqamah: "10:00 PM" },
  { date: 2, fajr_adhan_18deg: "03:33 AM", fajr_adhan_15deg: "03:33 AM", fajr_iqamah: "4:20 AM", sunrise: "05:14 AM", dhuhr_adhan: "12:50 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:52 PM", asr_hanafi: "5:58 PM", asr_iqamah: "6:00 PM", maghrib_adhan: "08:25 PM", maghrib_iqamah: "8:16 PM", isha_adhan: "10:07 PM", isha_iqamah: "10:00 PM" },
  { date: 3, fajr_adhan_18deg: "03:34 AM", fajr_adhan_15deg: "03:34 AM", fajr_iqamah: "4:20 AM", sunrise: "05:15 AM", dhuhr_adhan: "12:50 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:52 PM", asr_hanafi: "5:59 PM", asr_iqamah: "6:00 PM", maghrib_adhan: "08:25 PM", maghrib_iqamah: "8:16 PM", isha_adhan: "10:06 PM", isha_iqamah: "10:00 PM" },
  { date: 4, fajr_adhan_18deg: "03:35 AM", fajr_adhan_15deg: "03:35 AM", fajr_iqamah: "4:20 AM", sunrise: "05:15 AM", dhuhr_adhan: "12:50 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:52 PM", asr_hanafi: "5:59 PM", asr_iqamah: "6:00 PM", maghrib_adhan: "08:24 PM", maghrib_iqamah: "8:17 PM", isha_adhan: "10:06 PM", isha_iqamah: "10:00 PM" },
  { date: 5, fajr_adhan_18deg: "03:36 AM", fajr_adhan_15deg: "03:36 AM", fajr_iqamah: "4:20 AM", sunrise: "05:16 AM", dhuhr_adhan: "12:51 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:52 PM", asr_hanafi: "5:59 PM", asr_iqamah: "6:00 PM", maghrib_adhan: "08:24 PM", maghrib_iqamah: "8:17 PM", isha_adhan: "10:05 PM", isha_iqamah: "10:15 PM" },
  { date: 6, fajr_adhan_18deg: "03:37 AM", fajr_adhan_15deg: "03:37 AM", fajr_iqamah: "4:20 AM", sunrise: "05:17 AM", dhuhr_adhan: "12:51 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:53 PM", asr_hanafi: "6:00 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:24 PM", maghrib_iqamah: "8:18 PM", isha_adhan: "10:05 PM", isha_iqamah: "10:15 PM" },
  { date: 7, fajr_adhan_18deg: "03:38 AM", fajr_adhan_15deg: "03:38 AM", fajr_iqamah: "4:20 AM", sunrise: "05:17 AM", dhuhr_adhan: "12:51 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:53 PM", asr_hanafi: "6:00 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:24 PM", maghrib_iqamah: "8:18 PM", isha_adhan: "10:04 PM", isha_iqamah: "10:15 PM" },
  { date: 8, fajr_adhan_18deg: "03:39 AM", fajr_adhan_15deg: "03:39 AM", fajr_iqamah: "4:20 AM", sunrise: "05:18 AM", dhuhr_adhan: "12:51 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:53 PM", asr_hanafi: "6:00 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:23 PM", maghrib_iqamah: "8:19 PM", isha_adhan: "10:04 PM", isha_iqamah: "10:15 PM" },
  { date: 9, fajr_adhan_18deg: "03:40 AM", fajr_adhan_15deg: "03:40 AM", fajr_iqamah: "4:20 AM", sunrise: "05:18 AM", dhuhr_adhan: "12:51 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:53 PM", asr_hanafi: "6:00 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:23 PM", maghrib_iqamah: "8:19 PM", isha_adhan: "10:03 PM", isha_iqamah: "10:15 PM" },
  { date: 10, fajr_adhan_18deg: "03:41 AM", fajr_adhan_15deg: "03:41 AM", fajr_iqamah: "4:20 AM", sunrise: "05:19 AM", dhuhr_adhan: "12:51 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:53 PM", asr_hanafi: "6:01 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:22 PM", maghrib_iqamah: "8:20 PM", isha_adhan: "10:02 PM", isha_iqamah: "10:15 PM" },
  { date: 11, fajr_adhan_18deg: "03:42 AM", fajr_adhan_15deg: "03:42 AM", fajr_iqamah: "4:20 AM", sunrise: "05:20 AM", dhuhr_adhan: "12:52 PM", dhuhr_iqamah: "1:00 AM", asr_adhan: "04:53 PM", asr_hanafi: "6:01 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:22 PM", maghrib_iqamah: "8:20 PM", isha_adhan: "10:01 PM", isha_iqamah: "10:15 PM" },
  { date: 12, fajr_adhan_18deg: "03:43 AM", fajr_adhan_15deg: "03:43 AM", fajr_iqamah: "4:20 AM", sunrise: "05:21 AM", dhuhr_adhan: "12:52 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:53 PM", asr_hanafi: "6:02 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:21 PM", maghrib_iqamah: "8:22 PM", isha_adhan: "10:01 PM", isha_iqamah: "10:15 PM" },
  { date: 13, fajr_adhan_18deg: "03:44 AM", fajr_adhan_15deg: "03:44 AM", fajr_iqamah: "4:20 AM", sunrise: "05:21 AM", dhuhr_adhan: "12:52 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:53 PM", asr_hanafi: "6:03 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:21 PM", maghrib_iqamah: "8:22 PM", isha_adhan: "10:00 PM", isha_iqamah: "10:15 PM" },
  { date: 14, fajr_adhan_18deg: "03:45 AM", fajr_adhan_15deg: "03:45 AM", fajr_iqamah: "4:20 AM", sunrise: "05:22 AM", dhuhr_adhan: "12:52 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:53 PM", asr_hanafi: "6:03 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:20 PM", maghrib_iqamah: "8:23 PM", isha_adhan: "09:59 PM", isha_iqamah: "10:15 PM" },
  { date: 15, fajr_adhan_18deg: "03:46 AM", fajr_adhan_15deg: "03:46 AM", fajr_iqamah: "4:20 AM", sunrise: "05:23 AM", dhuhr_adhan: "12:52 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:53 PM", asr_hanafi: "6:03 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:20 PM", maghrib_iqamah: "8:23 PM", isha_adhan: "09:58 PM", isha_iqamah: "10:15 PM" },
  { date: 16, fajr_adhan_18deg: "03:47 AM", fajr_adhan_15deg: "03:47 AM", fajr_iqamah: "4:20 AM", sunrise: "05:24 AM", dhuhr_adhan: "12:52 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:53 PM", asr_hanafi: "6:04 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:19 PM", maghrib_iqamah: "8:24 PM", isha_adhan: "09:57 PM", isha_iqamah: "10:15 PM" },
  { date: 17, fajr_adhan_18deg: "03:49 AM", fajr_adhan_15deg: "03:49 AM", fajr_iqamah: "4:20 AM", sunrise: "05:25 AM", dhuhr_adhan: "12:52 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:52 PM", asr_hanafi: "6:04 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:19 PM", maghrib_iqamah: "8:24 PM", isha_adhan: "09:56 PM", isha_iqamah: "10:15 PM" },
  { date: 18, fajr_adhan_18deg: "03:50 AM", fajr_adhan_15deg: "03:50 AM", fajr_iqamah: "4:20 AM", sunrise: "05:25 AM", dhuhr_adhan: "12:52 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:52 PM", asr_hanafi: "6:04 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:18 PM", maghrib_iqamah: "8:24 PM", isha_adhan: "09:55 PM", isha_iqamah: "10:15 PM" },
  { date: 19, fajr_adhan_18deg: "03:51 AM", fajr_adhan_15deg: "03:51 AM", fajr_iqamah: "4:20 AM", sunrise: "05:26 AM", dhuhr_adhan: "12:52 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:52 PM", asr_hanafi: "6:04 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:17 PM", maghrib_iqamah: "8:24 PM", isha_adhan: "09:54 PM", isha_iqamah: "10:15 PM" },
  { date: 20, fajr_adhan_18deg: "03:52 AM", fajr_adhan_15deg: "03:52 AM", fajr_iqamah: "4:20 AM", sunrise: "05:27 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:52 PM", asr_hanafi: "6:05 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:16 PM", maghrib_iqamah: "8:25 PM", isha_adhan: "09:53 PM", isha_iqamah: "10:15 PM" },
  { date: 21, fajr_adhan_18deg: "03:54 AM", fajr_adhan_15deg: "03:54 AM", fajr_iqamah: "4:20 AM", sunrise: "05:28 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:52 PM", asr_hanafi: "6:05 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:16 PM", maghrib_iqamah: "8:25 PM", isha_adhan: "09:51 PM", isha_iqamah: "10:15 PM" },
  { date: 22, fajr_adhan_18deg: "03:55 AM", fajr_adhan_15deg: "03:55 AM", fajr_iqamah: "4:20 AM", sunrise: "05:29 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:52 PM", asr_hanafi: "6:05 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:15 PM", maghrib_iqamah: "8:25 PM", isha_adhan: "09:50 PM", isha_iqamah: "10:15 PM" },
  { date: 23, fajr_adhan_18deg: "03:56 AM", fajr_adhan_15deg: "03:56 AM", fajr_iqamah: "4:20 AM", sunrise: "05:30 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:52 PM", asr_hanafi: "6:05 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:14 PM", maghrib_iqamah: "8:25 PM", isha_adhan: "09:49 PM", isha_iqamah: "10:15 PM" },
  { date: 24, fajr_adhan_18deg: "03:58 AM", fajr_adhan_15deg: "03:58 AM", fajr_iqamah: "4:20 AM", sunrise: "05:31 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:51 PM", asr_hanafi: "6:05 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:13 PM", maghrib_iqamah: "8:25 PM", isha_adhan: "09:48 PM", isha_iqamah: "10:15 PM" },
  { date: 25, fajr_adhan_18deg: "03:59 AM", fajr_adhan_15deg: "03:59 AM", fajr_iqamah: "4:20 AM", sunrise: "05:32 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:51 PM", asr_hanafi: "6:05 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:12 PM", maghrib_iqamah: "8:25 PM", isha_adhan: "09:46 PM", isha_iqamah: "10:15 PM" },
  { date: 26, fajr_adhan_18deg: "04:00 AM", fajr_adhan_15deg: "04:00 AM", fajr_iqamah: "4:20 AM", sunrise: "05:33 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:51 PM", asr_hanafi: "6:05 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:11 PM", maghrib_iqamah: "8:25 PM", isha_adhan: "09:45 PM", isha_iqamah: "10:15 PM" },
  { date: 27, fajr_adhan_18deg: "04:02 AM", fajr_adhan_15deg: "04:02 AM", fajr_iqamah: "4:20 AM", sunrise: "05:34 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:51 PM", asr_hanafi: "6:06 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:10 PM", maghrib_iqamah: "8:25 PM", isha_adhan: "09:44 PM", isha_iqamah: "10:15 PM" },
  { date: 28, fajr_adhan_18deg: "04:03 AM", fajr_adhan_15deg: "04:03 AM", fajr_iqamah: "4:20 AM", sunrise: "05:34 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:50 PM", asr_hanafi: "6:06 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:09 PM", maghrib_iqamah: "8:25 PM", isha_adhan: "09:42 PM", isha_iqamah: "10:15 PM" },
  { date: 29, fajr_adhan_18deg: "04:05 AM", fajr_adhan_15deg: "04:05 AM", fajr_iqamah: "4:20 AM", sunrise: "05:35 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:50 PM", asr_hanafi: "6:06 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:08 PM", maghrib_iqamah: "8:25 PM", isha_adhan: "09:41 PM", isha_iqamah: "10:15 PM" },
  { date: 30, fajr_adhan_18deg: "04:06 AM", fajr_adhan_15deg: "04:06 AM", fajr_iqamah: "4:21 AM", sunrise: "05:36 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:50 PM", asr_hanafi: "6:06 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:07 PM", maghrib_iqamah: "8:25 PM", isha_adhan: "09:39 PM", isha_iqamah: "10:15 PM" },
  { date: 31, fajr_adhan_18deg: "04:07 AM", fajr_adhan_15deg: "04:07 AM", fajr_iqamah: "4:21 AM", sunrise: "05:37 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "04:49 PM", asr_hanafi: "6:06 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "08:06 PM", maghrib_iqamah: "8:25 PM", isha_adhan: "09:38 PM", isha_iqamah: "10:15 PM" }
];

function getEasternDateParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false
  }).formatToParts(date);

  return Object.fromEntries(parts.map((part) => [part.type, Number(part.value)]));
}

function isCurrentScheduleMonth(date) {
  const eastern = getEasternDateParts(date);
  return eastern.year === 2026 && eastern.month === 7;
}

function getTodayPrayerSchedule(date = new Date()) {
  const eastern = getEasternDateParts(date);
  if (!isCurrentScheduleMonth(date)) {
    return null;
  }

  return prayerSchedule.find((row) => row.date === eastern.day) || null;
}

function getDisplayPrayers(row) {
  return [
    { name: "Fajr", adhan: row.fajr_adhan_18deg, iqamah: row.fajr_iqamah, sunrise: row.sunrise },
    { name: "Dhuhr", adhan: row.dhuhr_adhan, iqamah: row.dhuhr_iqamah },
    { name: "Asr", adhan: row.asr_adhan, iqamah: row.asr_iqamah },
    { name: "Maghrib", adhan: row.maghrib_adhan, iqamah: row.maghrib_iqamah },
    { name: "Isha", adhan: row.isha_adhan, iqamah: row.isha_iqamah }
  ];
}

function timeToMinutes(time) {
  const match = time.match(/^(\d{1,2}):(\d{2})\s(AM|PM)$/);
  if (!match) {
    return 0;
  }

  let hour = Number(match[1]);
  const minute = Number(match[2]);
  const period = match[3];
  if (period === "PM" && hour !== 12) hour += 12;
  if (period === "AM" && hour === 12) hour = 0;
  return hour * 60 + minute;
}

function getActivePrayerName(row, date = new Date()) {
  const eastern = getEasternDateParts(date);
  const nowMinutes = eastern.hour * 60 + eastern.minute;
  const prayers = getDisplayPrayers(row);
  const adhanMinutes = prayers.map((prayer) => timeToMinutes(prayer.adhan));

  for (let index = 0; index < prayers.length; index += 1) {
    const start = adhanMinutes[index];
    const next = adhanMinutes[index + 1];

    if (nowMinutes < start) {
      return prayers[index].name;
    }

    if (next && nowMinutes >= start && nowMinutes < next) {
      return prayers[index].name;
    }
  }

  return "Isha";
}

function updateAtMidnight(callback) {
  const now = new Date();
  const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  window.setTimeout(() => {
    callback();
    updateAtMidnight(callback);
  }, nextMidnight.getTime() - now.getTime() + 1000);
}
