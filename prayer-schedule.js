const prayerSchedule = [
  { date: 1, fajr_adhan_18deg: "3:04 AM", fajr_adhan_15deg: "3:32 AM", fajr_iqamah: "4:20 AM", sunrise: "5:14 AM", dhuhr_adhan: "12:50 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:52 PM", asr_hanafi: "6:06 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:25 PM", maghrib_iqamah: "8:25 PM", isha_adhan: "10:08 PM", isha_iqamah: "10:15 PM" },
  { date: 2, fajr_adhan_18deg: "3:05 AM", fajr_adhan_15deg: "3:33 AM", fajr_iqamah: "4:20 AM", sunrise: "5:14 AM", dhuhr_adhan: "12:50 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:52 PM", asr_hanafi: "6:06 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:25 PM", maghrib_iqamah: "8:25 PM", isha_adhan: "10:07 PM", isha_iqamah: "10:15 PM" },
  { date: 3, fajr_adhan_18deg: "3:06 AM", fajr_adhan_15deg: "3:34 AM", fajr_iqamah: "4:30 AM", sunrise: "5:15 AM", dhuhr_adhan: "12:50 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:52 PM", asr_hanafi: "6:06 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:25 PM", maghrib_iqamah: "8:25 PM", isha_adhan: "10:07 PM", isha_iqamah: "10:15 PM" },
  { date: 4, fajr_adhan_18deg: "3:07 AM", fajr_adhan_15deg: "3:35 AM", fajr_iqamah: "4:30 AM", sunrise: "5:15 AM", dhuhr_adhan: "12:50 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:53 PM", asr_hanafi: "6:06 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:25 PM", maghrib_iqamah: "8:25 PM", isha_adhan: "10:06 PM", isha_iqamah: "10:15 PM" },
  { date: 5, fajr_adhan_18deg: "3:08 AM", fajr_adhan_15deg: "3:35 AM", fajr_iqamah: "4:30 AM", sunrise: "5:16 AM", dhuhr_adhan: "12:51 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:53 PM", asr_hanafi: "6:06 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:24 PM", maghrib_iqamah: "8:24 PM", isha_adhan: "10:06 PM", isha_iqamah: "10:15 PM" },
  { date: 6, fajr_adhan_18deg: "3:09 AM", fajr_adhan_15deg: "3:36 AM", fajr_iqamah: "4:30 AM", sunrise: "5:16 AM", dhuhr_adhan: "12:51 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:53 PM", asr_hanafi: "6:06 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:24 PM", maghrib_iqamah: "8:24 PM", isha_adhan: "10:05 PM", isha_iqamah: "10:15 PM" },
  { date: 7, fajr_adhan_18deg: "3:10 AM", fajr_adhan_15deg: "3:37 AM", fajr_iqamah: "4:30 AM", sunrise: "5:17 AM", dhuhr_adhan: "12:51 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:53 PM", asr_hanafi: "6:06 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:24 PM", maghrib_iqamah: "8:24 PM", isha_adhan: "10:05 PM", isha_iqamah: "10:15 PM" },
  { date: 8, fajr_adhan_18deg: "3:11 AM", fajr_adhan_15deg: "3:38 AM", fajr_iqamah: "4:30 AM", sunrise: "5:18 AM", dhuhr_adhan: "12:51 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:53 PM", asr_hanafi: "6:05 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:23 PM", maghrib_iqamah: "8:23 PM", isha_adhan: "10:04 PM", isha_iqamah: "10:15 PM" },
  { date: 9, fajr_adhan_18deg: "3:12 AM", fajr_adhan_15deg: "3:39 AM", fajr_iqamah: "4:30 AM", sunrise: "5:18 AM", dhuhr_adhan: "12:51 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:53 PM", asr_hanafi: "6:05 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:23 PM", maghrib_iqamah: "8:23 PM", isha_adhan: "10:03 PM", isha_iqamah: "10:15 PM" },
  { date: 10, fajr_adhan_18deg: "3:14 AM", fajr_adhan_15deg: "3:40 AM", fajr_iqamah: "4:30 AM", sunrise: "5:19 AM", dhuhr_adhan: "12:51 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:53 PM", asr_hanafi: "6:05 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:23 PM", maghrib_iqamah: "8:23 PM", isha_adhan: "10:03 PM", isha_iqamah: "10:05 PM" },
  { date: 11, fajr_adhan_18deg: "3:15 AM", fajr_adhan_15deg: "3:41 AM", fajr_iqamah: "4:30 AM", sunrise: "5:20 AM", dhuhr_adhan: "12:52 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:53 PM", asr_hanafi: "6:05 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:22 PM", maghrib_iqamah: "8:22 PM", isha_adhan: "10:02 PM", isha_iqamah: "10:05 PM" },
  { date: 12, fajr_adhan_18deg: "3:16 AM", fajr_adhan_15deg: "3:42 AM", fajr_iqamah: "4:30 AM", sunrise: "5:20 AM", dhuhr_adhan: "12:52 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:53 PM", asr_hanafi: "6:05 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:22 PM", maghrib_iqamah: "8:22 PM", isha_adhan: "10:01 PM", isha_iqamah: "10:05 PM" },
  { date: 13, fajr_adhan_18deg: "3:17 AM", fajr_adhan_15deg: "3:43 AM", fajr_iqamah: "4:30 AM", sunrise: "5:21 AM", dhuhr_adhan: "12:52 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:53 PM", asr_hanafi: "6:05 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:21 PM", maghrib_iqamah: "8:21 PM", isha_adhan: "10:00 PM", isha_iqamah: "10:05 PM" },
  { date: 14, fajr_adhan_18deg: "3:19 AM", fajr_adhan_15deg: "3:45 AM", fajr_iqamah: "4:30 AM", sunrise: "5:22 AM", dhuhr_adhan: "12:52 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:53 PM", asr_hanafi: "6:04 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:21 PM", maghrib_iqamah: "8:21 PM", isha_adhan: "9:59 PM", isha_iqamah: "10:05 PM" },
  { date: 15, fajr_adhan_18deg: "3:20 AM", fajr_adhan_15deg: "3:46 AM", fajr_iqamah: "4:30 AM", sunrise: "5:23 AM", dhuhr_adhan: "12:52 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:53 PM", asr_hanafi: "6:04 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:20 PM", maghrib_iqamah: "8:20 PM", isha_adhan: "9:58 PM", isha_iqamah: "10:05 PM" },
  { date: 16, fajr_adhan_18deg: "3:21 AM", fajr_adhan_15deg: "3:47 AM", fajr_iqamah: "4:30 AM", sunrise: "5:24 AM", dhuhr_adhan: "12:52 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:53 PM", asr_hanafi: "6:04 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:19 PM", maghrib_iqamah: "8:19 PM", isha_adhan: "9:57 PM", isha_iqamah: "10:05 PM" },
  { date: 17, fajr_adhan_18deg: "3:23 AM", fajr_adhan_15deg: "3:48 AM", fajr_iqamah: "4:45 AM", sunrise: "5:24 AM", dhuhr_adhan: "12:52 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:53 PM", asr_hanafi: "6:04 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:19 PM", maghrib_iqamah: "8:19 PM", isha_adhan: "9:56 PM", isha_iqamah: "10:00 PM" },
  { date: 18, fajr_adhan_18deg: "3:24 AM", fajr_adhan_15deg: "3:49 AM", fajr_iqamah: "4:45 AM", sunrise: "5:25 AM", dhuhr_adhan: "12:52 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:52 PM", asr_hanafi: "6:03 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:18 PM", maghrib_iqamah: "8:18 PM", isha_adhan: "9:55 PM", isha_iqamah: "10:00 PM" },
  { date: 19, fajr_adhan_18deg: "3:26 AM", fajr_adhan_15deg: "3:51 AM", fajr_iqamah: "4:45 AM", sunrise: "5:26 AM", dhuhr_adhan: "12:52 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:52 PM", asr_hanafi: "6:03 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:17 PM", maghrib_iqamah: "8:17 PM", isha_adhan: "9:54 PM", isha_iqamah: "10:00 PM" },
  { date: 20, fajr_adhan_18deg: "3:27 AM", fajr_adhan_15deg: "3:52 AM", fajr_iqamah: "4:45 AM", sunrise: "5:27 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:52 PM", asr_hanafi: "6:02 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:17 PM", maghrib_iqamah: "8:17 PM", isha_adhan: "9:53 PM", isha_iqamah: "10:00 PM" },
  { date: 21, fajr_adhan_18deg: "3:29 AM", fajr_adhan_15deg: "3:53 AM", fajr_iqamah: "4:45 AM", sunrise: "5:28 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:52 PM", asr_hanafi: "6:02 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:16 PM", maghrib_iqamah: "8:16 PM", isha_adhan: "9:52 PM", isha_iqamah: "10:00 PM" },
  { date: 22, fajr_adhan_18deg: "3:30 AM", fajr_adhan_15deg: "3:55 AM", fajr_iqamah: "4:45 AM", sunrise: "5:29 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:52 PM", asr_hanafi: "6:02 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:15 PM", maghrib_iqamah: "8:15 PM", isha_adhan: "9:51 PM", isha_iqamah: "10:00 PM" },
  { date: 23, fajr_adhan_18deg: "3:32 AM", fajr_adhan_15deg: "3:56 AM", fajr_iqamah: "4:45 AM", sunrise: "5:30 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:52 PM", asr_hanafi: "6:01 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:14 PM", maghrib_iqamah: "8:14 PM", isha_adhan: "9:49 PM", isha_iqamah: "10:00 PM" },
  { date: 24, fajr_adhan_18deg: "3:33 AM", fajr_adhan_15deg: "3:57 AM", fajr_iqamah: "4:45 AM", sunrise: "5:31 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:51 PM", asr_hanafi: "6:01 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:13 PM", maghrib_iqamah: "8:13 PM", isha_adhan: "9:48 PM", isha_iqamah: "9:50 PM" },
  { date: 25, fajr_adhan_18deg: "3:35 AM", fajr_adhan_15deg: "3:59 AM", fajr_iqamah: "4:45 AM", sunrise: "5:31 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:51 PM", asr_hanafi: "6:00 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:12 PM", maghrib_iqamah: "8:12 PM", isha_adhan: "9:47 PM", isha_iqamah: "9:50 PM" },
  { date: 26, fajr_adhan_18deg: "3:36 AM", fajr_adhan_15deg: "4:00 AM", fajr_iqamah: "4:45 AM", sunrise: "5:32 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:51 PM", asr_hanafi: "6:00 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:12 PM", maghrib_iqamah: "8:12 PM", isha_adhan: "9:45 PM", isha_iqamah: "9:50 PM" },
  { date: 27, fajr_adhan_18deg: "3:38 AM", fajr_adhan_15deg: "4:01 AM", fajr_iqamah: "4:45 AM", sunrise: "5:33 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:51 PM", asr_hanafi: "5:59 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:11 PM", maghrib_iqamah: "8:11 PM", isha_adhan: "9:44 PM", isha_iqamah: "9:50 PM" },
  { date: 28, fajr_adhan_18deg: "3:40 AM", fajr_adhan_15deg: "4:03 AM", fajr_iqamah: "4:45 AM", sunrise: "5:34 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:50 PM", asr_hanafi: "5:59 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:10 PM", maghrib_iqamah: "8:10 PM", isha_adhan: "9:43 PM", isha_iqamah: "9:50 PM" },
  { date: 29, fajr_adhan_18deg: "3:41 AM", fajr_adhan_15deg: "4:04 AM", fajr_iqamah: "4:45 AM", sunrise: "5:35 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:50 PM", asr_hanafi: "5:58 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:09 PM", maghrib_iqamah: "8:09 PM", isha_adhan: "9:41 PM", isha_iqamah: "9:50 PM" },
  { date: 30, fajr_adhan_18deg: "3:43 AM", fajr_adhan_15deg: "4:06 AM", fajr_iqamah: "4:45 AM", sunrise: "5:36 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:50 PM", asr_hanafi: "5:57 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:08 PM", maghrib_iqamah: "8:08 PM", isha_adhan: "9:40 PM", isha_iqamah: "9:50 PM" },
  { date: 31, fajr_adhan_18deg: "3:44 AM", fajr_adhan_15deg: "4:07 AM", fajr_iqamah: "5:00 AM", sunrise: "5:37 AM", dhuhr_adhan: "12:53 PM", dhuhr_iqamah: "1:00 PM", asr_adhan: "4:49 PM", asr_hanafi: "5:57 PM", asr_iqamah: "6:15 PM", maghrib_adhan: "8:06 PM", maghrib_iqamah: "8:06 PM", isha_adhan: "9:38 PM", isha_iqamah: "9:45 PM" }
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
